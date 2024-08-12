'use client';

import dynamic from 'next/dynamic';
import { useAtom } from 'jotai';
import { useEffect, useMemo, useState } from 'react';

import { useCurrentUser } from '@/components/auth/atoms/current-user';
import Button from '@/components/parts/form/button';
import PageTitle from '@/components/parts/page-title';
import SkipLink from '@/components/parts/skip-link';
import SuccessBanner from '@/components/parts/success-banner';
import AddPetForm from '@/components/pets/add-pet-form';
import { usePetsApi } from '@/components/pets/pets-api';
import { PetWithAnimal } from '@/components/pets/types';
import AddRecordForm from '@/components/records/add-base-record-form';
import { useRecordsApi } from '@/components/records/records-api';
import { MungedPetRecord } from '@/components/records/types';
import { Pet } from '@/graphql/generated/graphql';
import { getAvatarCompatibleColor, getSuitableAnimalAvatar } from '@/utils/utils';
import {
  BeakerIcon,
  BuildingOffice2Icon,
  SparklesIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

// this causes errors during server hydration and must be dynamically imported
const Animal = dynamic(() => import('react-animals'), { ssr: false });

export default function Dashboard() {
  // should be moved to jotai
  const [activePet, setActivePet] = useState<PetWithAnimal | null>(null);
  // controls for new pet add state - could also be moved to jotai
  const [addingPet, setAddingPet] = useState(false);
  const [newlyAddedPet, setNewlyAddedPet] = useState<Pet | null>(null);

  const [currentUser] = useAtom(useCurrentUser);
  const [addRecordFormActive, toggleAddRecordFormActive] = useState(false);
  // ugly, but quick method to maintain consistency between the avatar colors
  // in the pet list and active containers
  const [activeColorIndex, setActiveColorIndex] = useState(-1);
  // data fetching
  const { getPets } = usePetsApi(currentUser?.userRole, currentUser?.userId);
  const { data: pets } = getPets;
  const { getRecordsByPetId } = useRecordsApi(activePet?.id || '');
  const { data: petRecords } = getRecordsByPetId;

  useEffect(() => {
    if (pets?.allPets?.nodes.length && !activePet) {
      setActivePet(pets.allPets.nodes[0] as PetWithAnimal);
      setActiveColorIndex(0);
    }
  }, [pets, activePet]);

  const handlePetClick = (pet: PetWithAnimal, i: number) => {
    setActivePet(pet);
    toggleAddRecordFormActive(false);
    setActiveColorIndex(i);
  };

  const handleAddRecordClick = () => {
    toggleAddRecordFormActive(!addRecordFormActive);
  };

  const handleAddPetBtnClick = () => {
    setAddingPet(!addingPet);
  };

  const handleAddPetSuccess = (pet: Pet) => {
    setAddingPet(false);
    setNewlyAddedPet(pet);
  };

  const activePetRecords = useMemo(() => {
    const collated: MungedPetRecord[] = [];

    if (petRecords?.petById?.recordsByPetId.nodes.length) {
      for (const record of petRecords.petById.recordsByPetId.nodes) {
        record.allergyRecordsByRecordId.nodes.forEach((allergyRecord) => {
          const munged: MungedPetRecord = {
            recordId: record.id,
            userId: record.userId,
            petId: record.petId,
            recordType: record.recordType,
            createdAt: new Date(record.createdAt),
            type: 'allergy',
            name: allergyRecord.name,
            reactions: allergyRecord.reactions,
            severity: allergyRecord.severity,
            allergyRecordId: allergyRecord.id,
          };
          collated.push(munged);
        });

        record.vaccineRecordsByRecordId.nodes.forEach((vaccineRecord) => {
          const munged: MungedPetRecord = {
            recordId: record.id,
            userId: record.userId,
            petId: record.petId,
            recordType: record.recordType,
            createdAt: record.createdAt,
            type: 'vaccine',
            name: vaccineRecord.name,
            administeredAt: new Date(vaccineRecord.administeredAt),
          };
          collated.push(munged);
        });

        record.visitRecordsByRecordId.nodes.forEach((vaccineRecord) => {
          const munged: MungedPetRecord = {
            recordId: record.id,
            userId: record.userId,
            petId: record.petId,
            recordType: record.recordType,
            createdAt: record.createdAt,
            type: 'vet visit',
            name: vaccineRecord.vetName,
            administeredAt: new Date(vaccineRecord.visitDate),
          };
          collated.push(munged);
        });
      }
    }

    return collated;
  }, [petRecords?.petById?.recordsByPetId.nodes]);

  const checkShouldShowEmptyRecordMsg = () => {
    const mungedRecordsHaveData = activePetRecords.length === 0;
    const rawResponseHasData = petRecords?.petById?.recordsByPetId.nodes.length === 0;

    return (!rawResponseHasData || !mungedRecordsHaveData) && !addRecordFormActive;
  };

  return (
    <div className="space-y-4 w-full max-w-screen-lg">
      <SkipLink href="#add-pet-container" skipLinkText="Skip to add a new pet" />
      <SkipLink href="#pets-list-container" skipLinkText="Skip to my pets" />
      <SkipLink href="#my-pet-records" skipLinkText="Skip to my pet records" />

      <div id="dashboard-content" className="space-y-6">
        {/* add pet banner thing */}
        <div className="w-full border p-6 bg-white rounded-md shadow shadow-slate-200 space-y-6">
          {/* add pet button, update user record */}
          <div className="w-full flex justify-between items-center">
            <div className="flex gap-x-6 items-center">
              <PageTitle text={`Welcome, ${currentUser?.email.split('@')[0]}!`} />
            </div>
            <div id="add-pet-container">
              <Button
                type="button"
                className={`w-auto h-auto ${addingPet ? 'bg-red-error text-white hover:bg-red-900 hover:text-white' : ''}`}
                onClick={handleAddPetBtnClick}
              >
                {addingPet ? 'Discard changes' : '+ Add pet'}
              </Button>
            </div>
          </div>
          {/* TODO: add newly added pet success banner with close icon */}
          {newlyAddedPet ? (
            <SuccessBanner>
              <div className="flex items-center w-full justify-between">
                <div className="text-2xl">Successully added {newlyAddedPet?.name}!</div>
                <button
                  className="inline-block cursor-pointer"
                  title="Dismiss pet add success notification"
                  aria-label="Dismiss pet add success notification"
                  onClick={() => setNewlyAddedPet(null)}
                  onKeyDown={(e) =>
                    e.key.toLowerCase() === 'enter' ? setNewlyAddedPet(null) : null
                  }
                >
                  <XMarkIcon className="w-12" />
                </button>
              </div>
            </SuccessBanner>
          ) : null}

          {addingPet ? <AddPetForm onSuccess={handleAddPetSuccess} /> : null}
        </div>

        <div className="w-full grid grid-cols-3 rounded-md gap-x-4">
          {/* all pets container (1/3 w) */}
          <div
            className="col-span-1 rounded bg-white p-4 shadow shadow-slate-200 space-y-2"
            id="pets-list-container"
          >
            <div className="font-bold text-xl border-b pb-2">My pets</div>
            {pets?.allPets?.nodes.map((pet, i) => (
              <div
                key={pet.id}
                className="flex gap-x-2 cursor-pointer align-middle rounded p-2 hover:bg-slate-200"
                role="button"
                tabIndex={-1}
                onClick={() => handlePetClick(pet as PetWithAnimal, i)}
                onKeyDown={(e) => {
                  if (e.key.toLowerCase() === 'enter') {
                    handlePetClick(pet as PetWithAnimal, i);
                  }
                }}
              >
                <Animal
                  name={getSuitableAnimalAvatar(pet.animalByAnimalId?.name || '')}
                  circle
                  color={getAvatarCompatibleColor(i)}
                  size="55px"
                />
                <div>
                  <div className="font-bold text-lg">{pet.name}</div>
                  <div className="text-sm">Born {new Date(pet.dob).toDateString()}</div>
                </div>
              </div>
            ))}
            {/* empty results */}
            {!pets?.allPets?.nodes.length ? <div>No pets found. Go add a new pet!</div> : null}
          </div>

          {/* pet detail container (2/3) */}
          <div
            className="col-span-2 bg-white w-full space-y-6 p-4 shadow shadow-slate-200"
            id="my-pet-records"
          >
            {/* container title */}
            <div className="flex justify-between align-middle border-b pb-2">
              {/* name and avatar */}
              <div className="flex gap-x-2 items-center">
                <Animal
                  name={getSuitableAnimalAvatar(activePet?.animalByAnimalId?.name || '')}
                  circle
                  color={getAvatarCompatibleColor(activeColorIndex)}
                  size="45px"
                />
                <div className="text-4xl font-bold">{activePet?.name}</div>
              </div>

              {/* pet summary */}
              <div>
                <div>Date of birth: {new Date(activePet?.dob).toDateString()}</div>
                <div>
                  Pet type: <span className="capitalize">{activePet?.animalByAnimalId?.name}</span>
                </div>
                <div>Created at: {new Date(activePet?.dob).toDateString()}</div>
              </div>
            </div>

            {/* pet record summary */}
            <div className="flex justify-between w-full items-center">
              <div className="font-bold text-2xl">
                {addRecordFormActive ? 'Add new record' : 'Records'}
              </div>
              <div>
                <Button
                  type="button"
                  className={`w-auto ${addRecordFormActive ? 'bg-red-error text-white hover:bg-red-900 hover:text-white' : ''}`}
                  onClick={handleAddRecordClick}
                >
                  {addRecordFormActive ? 'Discard changes' : '+ Add record'}
                </Button>
                {/* TODO: options to sort by type, name, date created */}
              </div>
            </div>

            {/* add record form */}
            {addRecordFormActive ? (
              <AddRecordForm onSuccess={handleAddRecordClick} pet={activePet as PetWithAnimal} />
            ) : null}

            {/* records list */}
            {!addRecordFormActive && activePetRecords.length ? (
              <div className="space-y-4">
                {activePetRecords
                  .sort((a, b) => a.createdAt.valueOf() - b.createdAt.valueOf())
                  .map((record) => {
                    return (
                      <div key={record.recordId} className="flex gap-x-2">
                        {record.type === 'vaccine' ? (
                          <BeakerIcon color="blue" width={'25px'} />
                        ) : null}
                        {record.type === 'allergy' ? (
                          <SparklesIcon color="green" width={'25px'} />
                        ) : null}
                        {record.type === 'vet visit' ? (
                          <BuildingOffice2Icon color="pink" width={'25px'} />
                        ) : null}
                        <div className="font-bold">{record.name}</div>
                        <div>({record.type}):</div>
                        {record.administeredAt ? (
                          <div>Adminstered: {record.administeredAt?.toDateString()}</div>
                        ) : null}
                        {record.severity ? <div>Severity: {record.severity}</div> : null}
                        {record.reactions ? <div>Reactions: {record.reactions}</div> : null}
                        {/* vet visit record fields */}
                        {record.vetName ? <div>Reactions: {record.vetName}</div> : null}
                        {record.visitDate ? (
                          <div>Reactions: {record.visitDate.toDateString()}</div>
                        ) : null}
                        {record.notes ? <div>Reactions: {record.notes}</div> : null}
                      </div>
                    );
                  })}
              </div>
            ) : null}

            {/* empty records message (hide while form active) */}
            {checkShouldShowEmptyRecordMsg() ? null : (
              <div className="w-full pt-12 text-xl">No records found!</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

import { Animal, Pet } from '@/graphql/generated/graphql';

export type PetWithAnimal = Omit<Pet, 'recordsByPetId' | 'petsByAnimalId'> & {
  animalByAnimalId?: Animal;
};

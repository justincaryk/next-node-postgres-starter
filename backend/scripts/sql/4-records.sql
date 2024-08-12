-- create records table

CREATE TABLE IF NOT EXISTS private.record_type (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    name varchar(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS private.record (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    pet_id uuid REFERENCES private.pet (id) NOT NULL,
    user_id uuid REFERENCES public.user (id) NOT NULL,
    record_type uuid REFERENCES private.record_type (id) NOT NULL,
    created_at timestamp DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS private.vaccine_record (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    record_id uuid REFERENCES private.record (id) NOT NULL,
    name varchar(150) NOT NULL,
    administered_at timestamp NOT NULL
);

CREATE TYPE allergy_severity as enum('MILD', 'SEVERE');

CREATE TABLE IF NOT EXISTS private.allergy_record (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    record_id uuid REFERENCES private.record (id) NOT NULL,
    name varchar(50) NOT NULL,
    reactions text,
    severity allergy_severity NOT NULL
);

CREATE TABLE IF NOT EXISTS private.visit_record (
	id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
	visit_date timestamp NOT NULL,
	vet_name text NOT NULL,
	notes text,
	record_id uuid REFERENCES private.record (id)
);

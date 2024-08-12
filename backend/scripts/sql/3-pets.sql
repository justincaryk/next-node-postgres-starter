-- create pet & animal tables

CREATE TABLE IF NOT EXISTS private.animal (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    name varchar(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS private.pet (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    animal_id uuid REFERENCES private.animal (id) NOT NULL,
    user_id uuid REFERENCES public.user (id) NOT NULL,
    created_at timestamp DEFAULT NOW(),
    name varchar(50) NOT NULL,
    dob timestamp NOT NULL
);


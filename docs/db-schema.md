### Rough draft
```sql
-- Use DBML to define your database structure
-- Docs: https://dbml.dbdiagram.io/docs

Table user {
  id uuid
  email varchar(100)
  first_name varchar(75)
  last_name varchar(75)
  password varchar(255)
  created_at timestamp
}

Table pet {
  id uuid
  animal_id uuid
  user_id uuid
  created_at timestamp
  name varchar(60)
  dob timestamp
}

Table animal {
  id uuid
  type varchar(50)
}

Ref: pet.user_id > user.id // many-to-one
Ref: pet.animal_id > animal.id

Table record_type {
  id uuid
  name varchar(50)
}

Table record {
  id uuid
  user_id uuid
  pet_id uuid
  record_type_id uuid
  created_at timestamp
}

Ref: record.user_id > user.id
Ref: record.pet_id > pet.id
Ref: record.record_type_id > record_type.id

Table vaccine_record {
  id uuid
  record_id uuid
  name varchar(100)
  administered_date timestamp
}

Ref: vaccine_record.record_id > record.id


Table allergy_record {
  id uuid
  record_id uuid
  name uuid
  reactions text
  severity varchar(50) //CHECK (severity IN ('mild', 'severe')),
}

Ref: allergy_record.record_id > record.id
```


### Creating a new record type

1. Create a new table

```sql
CREATE TABLE visit_record (
    id SERIAL PRIMARY KEY,
    record_id INTEGER NOT NULL,
    visit_date timestamp NOT NULL,
    reason text,
    FOREIGN KEY (record_id) REFERENCES record(id)
);
```

2. Insert a new row in the record_type Table

```sql
INSERT INTO record_type (name) VALUES ([TABLE VAL]);
```

3. Create security policies

USER

```sql
ALTER TABLE private.[TABLE] ENABLE ROW LEVEL SECURITY;

CREATE POLICY [TABLE]_user_policy ON private.[TABLE] 
    TO role_user
    USING (
        EXISTS (
            SELECT 1
            FROM private.record r
            WHERE r.id = private.allergy_record.record_id
              AND r.user_id = current_setting('jwt.claims.user_id')::uuid
        )
    );
    
GRANT SELECT, INSERT, UPDATE, DELETE ON private.[TABLE] TO role_user;
```

ADMIN

```sql
CREATE POLICY admin_access_[TABLE]_policy on private.[TABLE]
    TO role_admin USING (true) WITH CHECK (true);

GRANT ALL on schema private to role_admin;

GRANT SELECT ON ALL TABLES IN SCHEMA private TO role_admin;
```
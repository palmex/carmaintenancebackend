CREATE TABLE cars(
    car_id         UUID DEFAULT uuid_generate_v4(),
    make           text,
    model          text,
    year          int,
    odometer      int,
    user_id          uuid,
    last_update     timestamp
);

CREATE TABLE users (
    user_id         UUID DEFAULT uuid_generate_v4(),
    name            text,
    email           text,
    phone           text,
    last_update     timestamp
);



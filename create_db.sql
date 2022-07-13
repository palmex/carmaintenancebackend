CREATE TABLE cars(
    car_id         UUID DEFAULT uuid_generate_v4(),
    make           text,
    model          text,
    year          int,
    odometer      int,
    user_id          uuid,
    last_update     timestamp
);

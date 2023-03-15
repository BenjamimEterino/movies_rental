-- CreateTable
CREATE TABLE "rentals" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "user_id" TEXT NOT NULL,
    "movide_id" TEXT NOT NULL,
    "start_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "end_at" DATETIME,
    "expected_return" DATETIME NOT NULL,
    "total" REAL,
    CONSTRAINT "rentals_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "rentals_movide_id_fkey" FOREIGN KEY ("movide_id") REFERENCES "movies" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

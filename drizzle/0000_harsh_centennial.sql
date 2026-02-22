CREATE TABLE `log_entries` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`message` text NOT NULL,
	`level` text NOT NULL,
	`created_at` integer NOT NULL
);

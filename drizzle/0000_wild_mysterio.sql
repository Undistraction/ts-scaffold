CREATE TABLE `log_entries` (
	`id` text PRIMARY KEY NOT NULL,
	`message` text NOT NULL,
	`level` text NOT NULL,
	`created_at` integer NOT NULL
);

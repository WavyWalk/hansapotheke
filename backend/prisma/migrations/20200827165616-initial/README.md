# Migration `20200827165616-initial`

This migration has been generated at 8/27/2020, 4:56:16 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."User" (
"id" SERIAL,
"identifier" text   ,
"title" text   ,
"salutation" text   ,
"firstName" text   ,
"lastName" text   ,
"tosAccepted" boolean   ,
PRIMARY KEY ("id")
)

CREATE TABLE "public"."Account" (
"id" SERIAL,
"userId" integer   ,
"email" text   ,
"password" text   ,
PRIMARY KEY ("id")
)

CREATE TABLE "public"."Role" (
"id" SERIAL,
"name" text   ,
PRIMARY KEY ("id")
)

CREATE TABLE "public"."_RoleToUser" (
"A" integer   NOT NULL ,
"B" integer   NOT NULL 
)

CREATE UNIQUE INDEX "Account_userId_unique" ON "public"."Account"("userId")

CREATE UNIQUE INDEX "_RoleToUser_AB_unique" ON "public"."_RoleToUser"("A", "B")

CREATE INDEX "_RoleToUser_B_index" ON "public"."_RoleToUser"("B")

ALTER TABLE "public"."Account" ADD FOREIGN KEY ("userId")REFERENCES "public"."User"("id") ON DELETE SET NULL ON UPDATE CASCADE

ALTER TABLE "public"."_RoleToUser" ADD FOREIGN KEY ("A")REFERENCES "public"."Role"("id") ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE "public"."_RoleToUser" ADD FOREIGN KEY ("B")REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200827165616-initial
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,39 @@
+// This is your Prisma schema file,
+// learn more about it in the docs: https://pris.ly/d/prisma-schema
+
+datasource db {
+  provider = "postgresql"
+  url = "***"
+}
+
+generator client {
+  provider = "prisma-client-js"
+}
+
+model User {
+    id Int @default(autoincrement()) @id
+    account Account?
+    identifier String?
+    roles Role[] @relation(references: [id])
+    title String?
+    salutation String?
+    firstName String?
+    lastName String?
+    tosAccepted Boolean?
+}
+
+model Account {
+    id Int @default(autoincrement()) @id
+    userId Int?
+    user User? @relation(fields: [userId], references: [id])
+    email String?
+    password String?
+}
+
+
+model Role {
+    id Int @default(autoincrement()) @id
+    name String?
+    users User[] @relation(references: [id])
+}
+
```



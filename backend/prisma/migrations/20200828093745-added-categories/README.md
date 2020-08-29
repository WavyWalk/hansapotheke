# Migration `20200828093745-added-categories`

This migration has been generated at 8/28/2020, 9:37:45 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."Category" (
"id" SERIAL,
"name" text   ,
"categoryType" text   ,
"parentId" integer   ,
PRIMARY KEY ("id")
)

CREATE TABLE "public"."_CategoryToProduct" (
"A" integer   NOT NULL ,
"B" integer   NOT NULL 
)

CREATE UNIQUE INDEX "_CategoryToProduct_AB_unique" ON "public"."_CategoryToProduct"("A", "B")

CREATE INDEX "_CategoryToProduct_B_index" ON "public"."_CategoryToProduct"("B")

ALTER TABLE "public"."Category" ADD FOREIGN KEY ("parentId")REFERENCES "public"."Category"("id") ON DELETE SET NULL ON UPDATE CASCADE

ALTER TABLE "public"."_CategoryToProduct" ADD FOREIGN KEY ("A")REFERENCES "public"."Category"("id") ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE "public"."_CategoryToProduct" ADD FOREIGN KEY ("B")REFERENCES "public"."Product"("id") ON DELETE CASCADE ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200827221234-added-indexes-to-product..20200828093745-added-categories
--- datamodel.dml
+++ datamodel.dml
@@ -2,9 +2,9 @@
 // learn more about it in the docs: https://pris.ly/d/prisma-schema
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
 generator client {
   provider = "prisma-client-js"
@@ -51,8 +51,9 @@
     baseProduct Product? @relation("Variants", fields: [baseProductUid], references: [uid])
     variants Product[] @relation("Variants")
     tags Tag[] @relation(references: [id])
     prices Price[]
+    categories Category[] @relation(references: [id])
     @@index([baseProductUid])
     @@index([uid])
     @@index([baseProductUidGroup])
@@ -81,5 +82,13 @@
     driver String?
     products Product[] @relation(references: [id])
 }
-
+model Category {
+    id Int @default(autoincrement()) @id
+    products Product[] @relation(references: [id])
+    name String?
+    categoryType String?
+    parentId Int?
+    parent Category? @relation("CategoryHierarchy", fields: [parentId], references: [id])
+    children Category[] @relation("CategoryHierarchy")
+}
```



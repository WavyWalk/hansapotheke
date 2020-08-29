# Migration `20200827185532-product-schema`

This migration has been generated at 8/27/2020, 6:55:32 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."Product" (
"id" SERIAL,
"averageRating" integer   ,
"created" text   ,
"descriptionShort" text   ,
"productName" text   ,
"prescriptionMedicine" boolean   ,
"uid" text   NOT NULL ,
"isBaseProduct" boolean   ,
"baseProductUid" text   ,
PRIMARY KEY ("id")
)

CREATE TABLE "public"."Price" (
"id" SERIAL,
"priceType" text   ,
"value" integer   ,
PRIMARY KEY ("id")
)

CREATE TABLE "public"."Tag" (
"id" SERIAL,
"tagType" text   ,
"value" text   ,
PRIMARY KEY ("id")
)

CREATE TABLE "public"."Media" (
"id" SERIAL,
"path" text   ,
"mediaType" text   ,
"driver" text   ,
PRIMARY KEY ("id")
)

CREATE TABLE "public"."_MediaToProduct" (
"A" integer   NOT NULL ,
"B" integer   NOT NULL 
)

CREATE TABLE "public"."_ProductToTag" (
"A" integer   NOT NULL ,
"B" integer   NOT NULL 
)

CREATE UNIQUE INDEX "Product.uid_unique" ON "public"."Product"("uid")

CREATE UNIQUE INDEX "_MediaToProduct_AB_unique" ON "public"."_MediaToProduct"("A", "B")

CREATE INDEX "_MediaToProduct_B_index" ON "public"."_MediaToProduct"("B")

CREATE UNIQUE INDEX "_ProductToTag_AB_unique" ON "public"."_ProductToTag"("A", "B")

CREATE INDEX "_ProductToTag_B_index" ON "public"."_ProductToTag"("B")

ALTER TABLE "public"."Product" ADD FOREIGN KEY ("baseProductUid")REFERENCES "public"."Product"("uid") ON DELETE SET NULL ON UPDATE CASCADE

ALTER TABLE "public"."_MediaToProduct" ADD FOREIGN KEY ("A")REFERENCES "public"."Media"("id") ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE "public"."_MediaToProduct" ADD FOREIGN KEY ("B")REFERENCES "public"."Product"("id") ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE "public"."_ProductToTag" ADD FOREIGN KEY ("A")REFERENCES "public"."Product"("id") ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE "public"."_ProductToTag" ADD FOREIGN KEY ("B")REFERENCES "public"."Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200827165616-initial..20200827185532-product-schema
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
@@ -29,11 +29,47 @@
     email String?
     password String?
 }
-
 model Role {
     id Int @default(autoincrement()) @id
     name String?
     users User[] @relation(references: [id])
 }
+model Product {
+    id Int @default(autoincrement()) @id
+    averageRating Int?
+    created String?
+    descriptionShort String?
+    productName String?
+    medias Media[] @relation(references: [id])
+    prescriptionMedicine Boolean?
+    uid String @unique
+    isBaseProduct Boolean?
+    baseProductUid String?
+    baseProduct Product? @relation("Variants", fields: [baseProductUid], references: [uid])
+    variants Product[] @relation("Variants")
+    tags Tag[] @relation(references: [id])
+}
+
+model Price {
+    id Int @default(autoincrement()) @id
+    priceType String?
+    value Int?
+}
+
+model Tag {
+    id Int @default(autoincrement()) @id
+    tagType String?
+    value String?
+    products Product[] @relation(references: [id])
+}
+
+model Media {
+    id Int @default(autoincrement()) @id
+    path String?
+    mediaType String?
+    driver String?
+    products Product[] @relation(references: [id])
+}
+
```



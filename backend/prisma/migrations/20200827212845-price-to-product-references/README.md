# Migration `20200827212845-price-to-product-references`

This migration has been generated at 8/27/2020, 9:28:45 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."Price" ADD COLUMN "productId" integer   

ALTER TABLE "public"."Price" ADD FOREIGN KEY ("productId")REFERENCES "public"."Product"("id") ON DELETE SET NULL ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200827211857-added-base-product-uid-group..20200827212845-price-to-product-references
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
@@ -50,14 +50,17 @@
     baseProductUidGroup String?
     baseProduct Product? @relation("Variants", fields: [baseProductUid], references: [uid])
     variants Product[] @relation("Variants")
     tags Tag[] @relation(references: [id])
+    prices Price[]
 }
 model Price {
     id Int @default(autoincrement()) @id
     priceType String?
     value Int?
+    productId Int?
+    product Product? @relation(fields: [productId], references: [id])
 }
 model Tag {
     id Int @default(autoincrement()) @id
@@ -73,4 +76,5 @@
     driver String?
     products Product[] @relation(references: [id])
 }
+
```



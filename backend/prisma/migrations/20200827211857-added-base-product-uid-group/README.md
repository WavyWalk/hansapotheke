# Migration `20200827211857-added-base-product-uid-group`

This migration has been generated at 8/27/2020, 9:18:57 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."Product" ADD COLUMN "baseProductUidGroup" text   
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200827204957-rename-medias-to-images..20200827211857-added-base-product-uid-group
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
@@ -46,8 +46,9 @@
     prescriptionMedicine Boolean?
     uid String @unique
     isBaseProduct Boolean?
     baseProductUid String?
+    baseProductUidGroup String?
     baseProduct Product? @relation("Variants", fields: [baseProductUid], references: [uid])
     variants Product[] @relation("Variants")
     tags Tag[] @relation(references: [id])
 }
```



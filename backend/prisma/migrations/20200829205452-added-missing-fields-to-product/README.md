# Migration `20200829205452-added-missing-fields-to-product`

This migration has been generated at 8/29/2020, 8:54:52 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."Product" ADD COLUMN "pzn" text   ,
ADD COLUMN "packSize" text   
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200829143330-added-pharma-form-to-product..20200829205452-added-missing-fields-to-product
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
@@ -53,8 +53,10 @@
     variants Product[] @relation("Variants")
     tags Tag[] @relation(references: [id])
     prices Price[]
     categories Category[] @relation(references: [id])
+    pzn String?
+    packSize String?
     @@index([baseProductUid])
     @@index([uid])
     @@index([baseProductUidGroup])
```



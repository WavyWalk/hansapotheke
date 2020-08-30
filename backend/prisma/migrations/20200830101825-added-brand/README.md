# Migration `20200830101825-added-brand`

This migration has been generated at 8/30/2020, 10:18:25 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."Product" ADD COLUMN "brand" text   
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200829205452-added-missing-fields-to-product..20200830101825-added-brand
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
@@ -47,8 +47,9 @@
     uid String @unique
     isBaseProduct Boolean?
     pharmaForm String?
     baseProductUid String?
+    brand String?
     baseProductUidGroup String?
     baseProduct Product? @relation("Variants", fields: [baseProductUid], references: [uid])
     variants Product[] @relation("Variants")
     tags Tag[] @relation(references: [id])
```



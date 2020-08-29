# Migration `20200827214308-added-currency-to-price`

This migration has been generated at 8/27/2020, 9:43:08 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."Price" ADD COLUMN "currency" text   
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200827212845-price-to-product-references..20200827214308-added-currency-to-price
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
@@ -57,8 +57,9 @@
 model Price {
     id Int @default(autoincrement()) @id
     priceType String?
     value Int?
+    currency String?
     productId Int?
     product Product? @relation(fields: [productId], references: [id])
 }
```



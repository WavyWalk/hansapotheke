# Migration `20200827204957-rename-medias-to-images`

This migration has been generated at 8/27/2020, 8:49:57 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql

```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200827185532-product-schema..20200827204957-rename-medias-to-images
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
@@ -41,9 +41,9 @@
     averageRating Int?
     created String?
     descriptionShort String?
     productName String?
-    medias Media[] @relation(references: [id])
+    images Media[] @relation(references: [id])
     prescriptionMedicine Boolean?
     uid String @unique
     isBaseProduct Boolean?
     baseProductUid String?
```



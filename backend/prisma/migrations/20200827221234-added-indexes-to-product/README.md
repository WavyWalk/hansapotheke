# Migration `20200827221234-added-indexes-to-product`

This migration has been generated at 8/27/2020, 10:12:34 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE INDEX "Product.baseProductUid_index" ON "public"."Product"("baseProductUid")

CREATE INDEX "Product.uid_index" ON "public"."Product"("uid")

CREATE INDEX "Product.baseProductUidGroup_index" ON "public"."Product"("baseProductUidGroup")
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200827214308-added-currency-to-price..20200827221234-added-indexes-to-product
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
@@ -51,8 +51,12 @@
     baseProduct Product? @relation("Variants", fields: [baseProductUid], references: [uid])
     variants Product[] @relation("Variants")
     tags Tag[] @relation(references: [id])
     prices Price[]
+
+    @@index([baseProductUid])
+    @@index([uid])
+    @@index([baseProductUidGroup])
 }
 model Price {
     id Int @default(autoincrement()) @id
```



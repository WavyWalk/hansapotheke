# Migration `20200829143330-added-pharma-form-to-product`

This migration has been generated at 8/29/2020, 2:33:30 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."Product" ADD COLUMN "pharmaForm" text   
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200828093745-added-categories..20200829143330-added-pharma-form-to-product
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
@@ -45,8 +45,9 @@
     images Media[] @relation(references: [id])
     prescriptionMedicine Boolean?
     uid String @unique
     isBaseProduct Boolean?
+    pharmaForm String?
     baseProductUid String?
     baseProductUidGroup String?
     baseProduct Product? @relation("Variants", fields: [baseProductUid], references: [uid])
     variants Product[] @relation("Variants")
@@ -85,10 +86,10 @@
 model Category {
     id Int @default(autoincrement()) @id
     products Product[] @relation(references: [id])
+    categoryType String?
     name String?
-    categoryType String?
     parentId Int?
     parent Category? @relation("CategoryHierarchy", fields: [parentId], references: [id])
     children Category[] @relation("CategoryHierarchy")
 }
```



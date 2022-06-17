-- Created for the Pull List Process (PLP) - Items would connect to the Product Universe (warehouse)
[Staging].[CVC_PLP](
[PK] [int] IDENTITY(1,1) NOT NULL,
--[Lookup] [int] NOT NULL, GREG PLEASE FIX THIS ONE


-- Base Info for Job (FND)
[Builder] [varchar](20) NOT NULL,
[Project] [varchar](20) NOT NULL,
[JobCo] [varchar](6) NULL,
[SubJobNo] [varchar](3) NULL,
-- [Lot_No_List] [varchar](40) NULL, CAN WE AGGREGATE THE Lot_no INSTEAD OF MAKING A NEW LIST?
[PublishDate] [datetime] NULL,
[Supervisor] [varchar](20) NULL,
[PO_No] [varchar](20) NULL,
[Warehouse_No] [varchar](2) NULL,
[Staging_Location] [varchar](6) NULL,
[DivisionID] [varchar](2) NULL,
[Company_Name] [varchar](20) NULL,


-- Info for the Order
[Part_Description] [varchar](28) NULL,
[Part_No] [varchar](20) NULL,
[Cost_Distrubtion_PartNo] [varchar](20) NULL,
[Built_Order_1] [varchar](10) NULL,
[Built_Order_2] [varchar](10) NULL,
[Built_Order_3] [varchar](10) NULL,
[Built_Order_4] [varchar](10) NULL,
[Built_Order_5] [varchar](10) NULL,
[Cost_Type] [varchar](1) NULL,
[UofM_PartNo][varchar]
--[Order_1] [varchar](10) NULL, THESE ARE THE BUCKETS WE WANT TO IMPORT INTO eCMS FOR WAREHOUSE ORDERING (Order Processing Entry)
--[Order_2] [varchar](10) NULL,
--[Order_3] [varchar](10) NULL,
--[Order_4] [varchar](10) NULL,
--[Order_5] [varchar](10) NULL,

-- Built for CVC START

[Staging].[CVC_START](
[PK] [int] IDENTITY(1,1) NOT NULL,
[Builder] [varchar](20) NOT NULL,
[Project] [varchar](20) NOT NULL,
[JobCo] [varchar](6) NULL,
[Lots] [varchar](8) NULL,
[Slab_Type] [varchar](20) NULL,
[Company_No] [varchar](10) NULL,
[SubJobCo] [varchar](3) NULL,
--[Lookup] [int] NOT NULL, GREG PLEASE FIX THIS ONE
[Lot_No] [varchar](10) NULL,
[Address] [varchar](10) NULL,
[Garage Orientation] [varchar](10) NULL,

-- "SubJobCo" will be used to filter between the Foundations (FND) & Flatwork/Pavers (FLT)
[Plan_Name] [varchar](20) NULL,
[Plan_ElvOpt] [varchar](20) NULL,
[Contract_Price] [decimal](12, 2) NULL,
[Name_Add_For_1] [varchar](20) NULL,
[Add_For_1] [decimal](12, 2) NULL,
[Name_Add_For_2] [varchar](20) NULL,
[Add_For_2] [decimal](12, 2) NULL,
[Name_Add_For_3] [varchar](20) NULL,
[Add_For_3] [decimal](12, 02) NULL,
[Name_Add_For_4] [varchar](20) NULL,
[Add_For_4] [decimal](12, 2) NULL,
[Adjusted Total] [decimal](12, 2) NULL,
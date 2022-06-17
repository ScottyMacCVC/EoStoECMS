-- Created for the Request for Addendum (RFA)
[Staging].[CVC_RFA](
[PK] [int] IDENTITY(1,1) NOT NULL,
--[Lookup] [int] NOT NULL, GREG PLEASE FIX THIS ONE

-- Base Info for Job Foundations (FND)
[Builder] [varchar](20) NOT NULL,
[Project] [varchar](20) NOT NULL,
[JobCo] [varchar](6) NULL,
[Contact] [varchar](20) NULL,
[Lots] [varchar](8) NULL,
[Proposal_REV] [varchar](8) NULL,

-- Info for Foundation Plans (FND)
[FND_Plan_Name] [varchar](20) NULL,
[FND_Plan_ElvOpt] [varchar](20) NULL,

-- Increase Quantities & Units for Foundations (FND)
[FND_Increase_Dollar_per_hour] [decimal](6, 2) NULL,
[FND_Hours_per_plan] [decimal](8, 0) NULL,
[FND_Increase_Dollar_per_CY] [decimal](6, 2) NULL,
[FND_CY_per_plan] [decimal](8, 0) NULL,
[FND_Increase_Dollar_per_RockTN] [decimal](6, 2) NULL,
[FND_RockTN_per_plan] [decimal](8, 0) NULL,
[FND_Increase_Dollar_per_SteelTN] [decimal](6, 2) NULL,
[FND_SteelTN_per_plan] [decimal](8, 0) NULL,
[FND_Increase_Dollar_per_PT_Cable_LF] [decimal](6, 2) NULL,
[FND_PT_Cable_LF_per_plan] [decimal](8, 0) NULL,
[FND_Increase_Dollar_per_Pump_CY] [decimal](6, 2) NULL,
-- [Pump_CY_per_plan] [decimal](8, 0) NULL, USES [CY_per_plan]

-- Contract Info for RFA Foundations (FND)
[FND_Contract_Price] [decimal](12, 0) NULL,
[FND_Requested_Increase] [decimal](12, 0) NULL,
[FND_Total] [decimal](12, 0) NULL,


-- Info for Flatwork Plans (FLT)
[FLT_Plan_Name] [varchar](20) NULL,
[FLT_Plan_ElvOpt] [varchar](20) NULL,

-- Increase Quantities & Units for Flatwork (FLT)
[Increase_Dollar_per_SF_DW] [decimal](6, 2) NULL,
[FLT_Item_DW] [decimal](8, 0) NULL,
[FLT_Increase_Dollar_per_Front_Walk] [decimal](6, 2) NULL,
[FLT_Item_Front_walk] [decimal](8, 0) NULL,
[FLT_Increase_Dollar_per_Porch] [decimal](6, 2) NULL,
[FLT_Item_Porch] [decimal](8, 0) NULL,
[FLT_Increase_Dollar_per_Stoop] [decimal](6, 2) NULL,
[FLT_Item_Stoop] [decimal](8, 0) NULL,
[FLT_Increase_Dollar_per_Patio] [decimal](6, 2) NULL,
[FLT_Item_Patio] [decimal](8, 0) NULL,
[FLT_Increase_Dollar_per_Service_Walk] [decimal](6, 2) NULL,
[FLT_Item_Service_Walk] [decimal](8, 0) NULL,
[FLT_Increase_Dollar_per_Approach] [decimal](6, 2) NULL,
[FLT_Item_Approach] [decimal](8, 0) NULL,
[FLT_Increase_Dollar_per_City_Walk] [decimal](6, 2) NULL,
[FLT_Item_City_Walk] [decimal](8, 0) NULL,
[FLT_Increase_Dollar_per_Steps] [decimal](6, 2) NULL,
[FLT_Item_Steps] [decimal](8, 0) NULL,
[FLT_Increase_Dollar_per_FW_VarItem1] [decimal](6, 2) NULL,
[FLT_Item_FW_VarItem1] [decimal](8, 0) NULL,
[FLT_Increase_Dollar_per_FW_VarItem2] [decimal](6, 2) NULL,
[FLT_Item_FW_VarItem2] [decimal](8, 0) NULL,
[FLT_Increase_Dollar_per_FW_VarItem3] [decimal](6, 2) NULL,
[FLT_Item_FW_VarItem3] [decimal](8, 0) NULL,
[FLT_Increase_Dollar_per_FW_VarItem4] [decimal](6, 2) NULL,
[FLT_Item_FW_VarItem4] [decimal](8, 0) NULL,


-- Contract Info for RFA Flatwork/Pavers (FLT)
[FLT_Contract_Price] [decimal](12, 0) NULL,
[FLT_Requested_Increase] [decimal](12, 0) NULL,
[FLT_Total] [decimal](12, 0) NULL,
# EoStoECMS
Grand Project to encompass and map all steps within CVC's construction process

## Current Challenges

### We need to go through the entry of the START from EoS. One stop shop to input all information, grab documents, and a central location for the team to interact. 
- What are the steps? 
- What info do we need to get into the system?
- Who is involved? 
- Is the process fluid? 
- What data can we currently import? 
- What data do we need to add? 
- Schedule of tasks would clarify where the team is. EX: Contracts processing. What has been processed? 
- Showing Daily projects will clarify what the team needs and will help identify roadblocks. 
- Filling out Logs is typical at CVC. The issue is we are managing several different excel logs that don't talk to each other. The goal would be to unify the information and provide a way for the team to interact. We want to be able to assign tasks and place the tasks on a shared dashboard. EoS has the power to do this work, but we need to provide a workflow for the team. Training, skills, and processing the work will provide the feedback we need to be successful. That would be fuckin dope. 

### EoS to START Process
- Step 1 is UDFs Workflow
- Step 2 is Contract Import Form
- Step 3 is START Import Form

### We need to build one START using company 98 from EoS and then Mani can test the staging table import.

![Mani Email](https://github.com/ScottyMacCVC/EoStoECMS/blob/main/Images/22.06.17-Mani%20Email.png)

![Staging Tables-Job Cost Data](https://github.com/ScottyMacCVC/EoStoECMS/blob/main/Images/22.06.17-Staging%20Tables-Job%20Cost%20Data.png)

![Staging Tables-Contract Information](https://github.com/ScottyMacCVC/EoStoECMS/blob/main/Images/22.06.17-Staging%20Tables-Contract%20Information.png)

### We want to build TrueSight into our STARTs process. 
- What is TrueSight? TrueSight is a report with all job cost items in an importable form. It grabs the average cost per cost distribution. We can save reports in html form and potentially create a connection between the report and the SAGE budget. The START process in EoS should have a budget update step. It should grab the TrueSight report numbers and update the sub job START budget. We would improve the TrueSight Report $/units by building machine learning into either the html code or the report. (Link to ML .py - https://github.com/ScottyMacCVC/CVC-SQL1-EOSNAVIGATOR_DEV/blob/main/machine_model-checkpoint.ipynb)
- Where does the step need to occur? The step needs to occur during the early stages of the START Import Form. 
- Why is this step important? Our field needs the closest to actual budget as possible. 

![TrueSight Example](https://github.com/ScottyMacCVC/EoStoECMS/blob/main/Images/22.06.18-TrueSight%20Example.png)

![TrueSight Query](https://github.com/ScottyMacCVC/EoStoECMS/blob/main/Images/22.06.18-TrueSight%20Query.png)

### KnowledgeBase

## Overviews of CVC and Processes

### The Enterprise View - https://github.com/ScottyMacCVC/EoStoECMS/blob/main/Resources/20.02.24-CVC%20Process%20Map-Enterprise%20Level.xlsx
![Enterprise View of CVC](https://github.com/ScottyMacCVC/EoStoECMS/blob/main/Images/22.06.17-Enterprise%20View%20of%20CVC.png)

### START Process Mapping
![START Process](https://github.com/ScottyMacCVC/EoStoECMS/blob/main/Images/22.06.17-START%20Process.png)

### Generalized Cycle of Construction
![Generalized Cycle](https://github.com/ScottyMacCVC/EoStoECMS/blob/main/Images/22.06.17-Generalized%20Cycle.png)

### Basic Controlling Unit for SAP Based Products
![Basic Controlling Unit](https://github.com/ScottyMacCVC/EoStoECMS/blob/main/Images/22.06.17-Basic%20Controlling%20Unit.png)


## SQL Table Information -  Server\instance: CVC-SQL1\EOSNAVIGATOR_DEV
- Database: Navigator
### Tables: 
- Staging.CVC ContractInformationData
- Staging.CVC_JobInfoData
- Staging.CVC_LegalData
- Staging.CVC_JobSpecData
- Staging.CVC_JobCostData
### Below 3 tables doesn't have any data in the DB tables.
- Staging.CVC_LegalData
- Staging.CVC_JobSpecData
- Staging.CVC_JobCostData
### ![CVC_ERD](https://github.com/ScottyMacCVC/EoStoECMS/blob/main/Images/22.06.18-ERD.png)
ERD INFO for quickDBD

```
CVC_ContractInformationData
-
JobNo Varchar pk fk - CVC_START.JobNo
SubJobNo Varchar pk fk - CVC_START.SubJobNo
CVC_ContractInformation_PK
Estimate_PK FK >- CVC_START.Estimate_PK
CompanyID FK >- CVC_START.CompanyID
DivisionID FK >- CVC_START.DivisionID
BuilderID FK >- CVC_START.BuilderID
ProjectName
CustomerID
Contract varchar FK >- CVC_Contracts.ContractNo
ItemNumber
Plan
Address
EffectiveDate
ContractAmount
Quantity FK >- CVC_START.Quantity
Unit FK >- CVC_START.Unit
UnitPrice
JCDistributionSubJob
JCDistribution
JCDistributionCostType
JCDistributionRecordType
FixedContract
IncludeInMarkup
TaxCode1
TaxCode2
TaxCode3
PublishBy
PublishDate

CVC_JobCostData
-
PK FK >- CVC_START.PK
Estimate_PK FK >- CVC_START.Estimate_PK
CompanyID FK >- JC_IMPORT.CO_NO
DivisionID FK >- JC_IMPORT.DIV_NO
BuilderID FK >- CVC_START.BuilderID
JobNo Varchar pk FK >- JC_IMPORT.PROJJOB_NO
SubJobNo FK >- JC_IMPORT.SUBPROJJOB_NO
CostCode FK >- JC_IMPORT.JC_DIST
CostType FK >- JC_IMPORT.CT
Quantity FK >- JC_IMPORT.BUDG_QTY
QuantityBare FK >- CVC_START.QuantityBare
Unit FK >- JC_IMPORT.UNIT_MEASURE
Hours FK >- JC_IMPORT.BUDG_HOURS
Amount FK >- JC_IMPORT.BUDG_AMOUNT
PublishBy
PublishDate

CVC_JobInfoData
-
PK FK >- CVC_START.PK
FoundationSlabEdge FK >- CVC_START.FoundationSlabEdge
FoundationFootingSize FK >- CVC_START.FoundationFootingSize
FoundationFootingRebar FK >- CVC_START.FoundationFootingRebar
FoundationFootingDowel FK >- CVC_START.FoundationFootingDowel
FoundationFootingWC FK >- CVC_START.FoundationFootingWC
FoundationFootingPSI FK >- CVC_START.FoundationFootingPSI
FoundationSlabThickness FK >- CVC_START.FoundationSlabThickness
FoundationSlabReinforcement FK >- CVC_START.FoundationSlabReinforcement
FoundationRocksandThickness FK >- CVC_START.FoundationRocksandThickness
FoundationUpperBaseThickness FK >- CVC_START.FoundationUpperBaseThickness
FoundationUpperBaseType FK >- CVC_START.FoundationUpperBaseType
FoundationLowerBaseThickness FK >- CVC_START.FoundationLowerBaseThickness
FoundationLowerBaseType FK >- CVC_START.FoundationLowerBaseType
FoundationVapoRetarder FK >- CVC_START.FoundationVapoRetarder
FoundationWCRatio FK >- CVC_START.FoundationWCRatio
FoundationPSI FK >- CVC_START.FoundationPSI
FoundationContractName FK >- CVC_START.FoundationContractName
FoundationContractDate FK >- CVC_START.FoundationContractDate
FoundationContractPricingPending FK >- CVC_START.FoundationContractPricingPending
FoundationContractSOWPending FK >- CVC_START.FoundationContractSOWPending
FoundationContractInsurancePending FK >- CVC_START.FoundationContractInsurancePending
FoundationContractNotesPending FK >- CVC_START.FoundationContractNotesPending
FoundationProposal FK >- CVC_START.FoundationProposal
FoundationBudget FK >- CVC_START.FoundationBudget
FoundationLatestPlanLink FK >- CVC_START.FoundationLatestPlanLink
FoundationTaxRate FK >- CVC_START.FoundationTaxRate
FoundationEquipment FK >- CVC_START.FoundationEquipment
FoundationGLInsurance FK >- CVC_START.FoundationGLInsurance
FoundationBudgetMargin FK >- CVC_START.FoundationBudgetMargin
FoundationOverallLotCount FK >- CVC_START.FoundationOverallLotCount
FoundationOutOfLevel FK >- CVC_START.FoundationOutOfLevel
FoundationDeepenedFooting FK >- CVC_START.FoundationDeepenedFooting
FoundationWalls FK >- CVC_START.FoundationWalls
FoundationCurrentConcreteQuote FK >- CVC_START.FoundationCurrentConcreteQuote
FoundationConcreteQuoteDate FK >- CVC_START.FoundationConcreteQuoteDate
FoundationConreteIncreaseDate FK >- CVC_START.FoundationConreteIncreaseDate
FoundationMixDesignNo FK >- CVC_START.FoundationMixDesignNo
FlatworkMixDesignNo FK >- CVC_START.FlatworkMixDesignNo
PublishBy
PublishDate

CVC_LegalData
-
JobNo FK >- CVC_START.JobNo
PK FK >- CVC_START.PK
Estimate_PK FK >- CVC_START.Estimate_PK
CompanyID FK >- CVC_START.CompanyID
DivisionID FK >- CVC_START.DivisionID
BuilderID FK >- CVC_START.BuilderID
Owner FK >- CVC_START.Owner
Contractor FK >- CVC_START.Contractor
Subcontractor FK >- CVC_START.Subcontractor
ContractDate FK >- CVC_START.ContractDate
Version FK >- CVC_START.Version
Lender FK >- CVC_START.Lender
ContractType FK >- CVC_START.ContractType
LiquidatedDamages FK >- CVC_START.LiquidatedDamages
TerminationTerms FK >- CVC_START.TerminationTerms
TerminationPay FK >- CVC_START.TerminationPay
WarrantyPeriod FK >- CVC_START.WarrantyPeriod
NoticeDays FK >- CVC_START.NoticeDays
PermittedDelays FK >- CVC_START.PermittedDelays
StartDate FK >- CVC_START.StartDate
BondAmount FK >- CVC_START.BondAmount
BondRequired FK >- CVC_START.BondRequired
DateReceived FK >- CVC_START.DateReceived
BondAgentNotified FK >- CVC_START.BondAgentNotified
LegalReviewDate FK >- CVC_START.LegalReviewDate
ScopeReviewDate FK >- CVC_START.ScopeReviewDate
CommentsSentDate FK >- CVC_START.CommentsSentDate
CommentsResponseDate FK >- CVC_START.CommentsResponseDate
ContractExecutedDate FK >- CVC_START.ContractExecutedDate
ContractStatus FK >- CVC_START.ContractStatus
InsuranceStatus FK >- CVC_START.InsuranceStatus
OpsContactPerson FK >- CVC_START.OpsContactPerson
APContactPerson FK >- CVC_START.APContactPerson
ContactNumber FK >- CVC_START.ContactNumber
ContactAddress FK >- CVC_START.ContactAddress
CGLPolicy FK >- CVC_START.CGLPolicy
WCPolicy FK >- CVC_START.WCPolicy
AutoPolicy FK >- CVC_START.AutoPolicy
ExcessPolicy FK >- CVC_START.ExcessPolicy
GLOccupancyLimit FK >- CVC_START.GLOccupancyLimit
GLAggregateLimit FK >- CVC_START.GLAggregateLimit
GLCompOpLimit FK >- CVC_START.GLCompOpLimit
GLPollution FK >- CVC_START.GLPollution
CompletedOpsReq FK >- CVC_START.CompletedOpsReq
GLPersInjuryLimit FK >- CVC_START.GLPersInjuryLimit
GLOccuranceClaim FK >- CVC_START.GLOccuranceClaim
GLLimit FK >- CVC_START.GLLimit
WCBodilyInjuryLimit FK >- CVC_START.WCBodilyInjuryLimit
WCDiseaseLimit FK >- CVC_START.WCDiseaseLimit
WCAggregateLimit FK >- CVC_START.WCAggregateLimit
WCWaiverofSubrogration FK >- CVC_START.WCWaiverofSubrogration
ALOccuranceLimit FK >- CVC_START.ALOccuranceLimit
ALAggregateLimit FK >- CVC_START.ALAggregateLimit
AdditionalInsured FK >- CVC_START.AdditionalInsured
CertificateHolders FK >- CVC_START.CertificateHolders
UmbrellaPolicy FK >- CVC_START.UmbrellaPolicy
ExcessPolicyLimit FK >- CVC_START.ExcessPolicyLimit
ExcellLineBacking FK >- CVC_START.ExcellLineBacking
OCIP FK >- CVC_START.OCIP
OCIPCoverage FK >- CVC_START.OCIPCoverage
OCIPSubDeductible FK >- CVC_START.OCIPSubDeductible
OCIPOwnerDeductible FK >- CVC_START.OCIPOwnerDeductible
OCIPDeductibleType FK >- CVC_START.OCIPDeductibleType
OCIPTPA FK >- CVC_START.OCIPTPA
OCIPBidCredit FK >- CVC_START.OCIPBidCredit
OCIPOccurrenceLimit FK >- CVC_START.OCIPOccurrenceLimit
OCIPAggregateLimit FK >- CVC_START.OCIPAggregateLimit
OCIPExcessLimit FK >- CVC_START.OCIPExcessLimit
GLSubAccount FK >- CVC_START.GLSubAccount
State FK >- CVC_START.State
PrevalingWage FK >- CVC_START.PrevalingWage
WageDeterminationReceived FK >- CVC_START.WageDeterminationReceived
CertifiedPayroll FK >- CVC_START.CertifiedPayroll
ScheduleofValues FK >- CVC_START.ScheduleofValues
BillDate FK >- CVC_START.BillDate
PayDate FK >- CVC_START.PayDate
Retention FK >- CVC_START.Retention
BillingInstructions FK >- CVC_START.BillingInstructions
AddBillingInstructions FK >- CVC_START.AddBillingInstructions
PublishBy
PublishDate

CVC_START-SLAB
----
PK FK >- CVC_START.PK
Estimate_PK FK >- CVC_START.Estimate_PK
CompanyID FK >- CVC_START.CompanyID
DivisionID FK >- CVC_START.DivisionID
BuilderID FK >- CVC_START.BuilderID
JobNo Varchar pk FK >- CVC_START.JobNo
SubJobNo FK >- CVC_START.SubJobNo
Lots FK >- CVC_START.Lots
Slab_Type FK >- CVC_START.Slab_Type
Lot_No FK >- CVC_START.Lot_No
Garage_Orientation FK >- CVC_START.Garage_Orientation
Plan_Name FK >- CVC_START.Plan_Name
Plan_ElvOpt FK >- CVC_START.Plan_ElvOpt
Contract_Price FK >- CVC_START.Contract_Price
Name_Add_For_1 FK >- CVC_START.Name_Add_For_1
Add_For_1 FK >- CVC_START.Add_For_1
Name_Add_For_2 FK >- CVC_START.Name_Add_For_2
Add_For_2 FK >- CVC_START.Add_For_2
Name_Add_For_3 FK >- CVC_START.Name_Add_For_3
Add_For_3 FK >- CVC_START.Add_For_3
Name_Add_For_4 FK >- CVC_START.Name_Add_For_4
Add_For_4 FK >- CVC_START.Add_For_4
TotalAdjusted FK >- CVC_START.TotalAdjusted
PublishBy
PublishDate


CVC_Contracts
----
PK FK >- CVC_START.PK
JobNo FK >- CVC_START.JobNo
ContractNo
CVC_Contracts_PK FK >- CVC_START.CVC_Contracts_PK
Contract_No FK >- CVC_START.Contract_No
Contract_Description FK >- CVC_START.Contract_Description
Contract_Date FK >- CVC_START.Contract_Date
Builder_Eff_Release FK >- CVC_START.Builder_Eff_Release
Eff_Date FK >- CVC_START.Eff_Date
Identifying_Notes FK >- CVC_START.Identifying_Notes
Footprint_SF FK >- CVC_START.Footprint_SF
Labor_MH FK >- CVC_START.Labor_MH
Concrete_CY FK >- CVC_START.Concrete_CY
Rock_TN FK >- CVC_START.Rock_TN
Steel_LBS FK >- CVC_START.Steel_LBS
PT_Cable_LF FK >- CVC_START.PT_Cable_LF
Pumping_CY FK >- CVC_START.Pumping_CY
Lumber_BF FK >- CVC_START.Lumber_BF
Sage_Estimate_Amount FK >- CVC_START.Sage_Estimate_Amount
RFA_Amount FK >- CVC_START.RFA_Amount
Proposal_Amount FK >- CVC_START.Proposal_Amount
Draw_1 FK >- CVC_START.Draw_1
Draw_2 FK >- CVC_START.Draw_2
Draw_3 FK >- CVC_START.Draw_3
Draw_4 FK >- CVC_START.Draw_4
OCIP_Amount FK >- CVC_START.OCIP_Amount
Contract_Amount FK >- CVC_START.Contract_Amount
Contract_vs_Proposal_Delta FK >- CVC_START.Contract_vs_Proposal_Delta
Delta_Variance_Percent FK >- CVC_START.Delta_Variance_Percent
Created_by FK >- CVC_START.Created_by
Created date FK >- CVC_START.Created
Estimate_Name FK >- CVC_START.Estimate_Name
Proposal_Name FK >- CVC_START.Proposal_Name
Contract_File_Name FK >- CVC_START.Contract_File_Name
Notes FK >- CVC_START.Notes
PublishBy
PublishDate

CVC_RFA
----
PK FK >- CVC_START.PK
Estimate_PK FK >- CVC_START.Estimate_PK
CompanyID FK >- CVC_START.CompanyID
DivisionID FK >- CVC_START.DivisionID
BuilderID FK >- CVC_START.BuilderID
JobNo Varchar pk FK >- CVC_START.JobNo
FND_Increase_Dollar_per_hour FK >- CVC_START.FND_Increase_Dollar_per_hour
FND_Hours_per_plan FK >- CVC_START.FND_Hours_per_plan
FND_Increase_Dollar_per_CY FK >- CVC_START.FND_Increase_Dollar_per_CY
FND_CY_per_plan FK >- CVC_START.FND_CY_per_plan
FND_Increase_Dollar_per_RockTN FK >- CVC_START.FND_Increase_Dollar_per_RockTN
FND_RockTN_per_plan FK >- CVC_START.FND_RockTN_per_plan
FND_Increase_Dollar_per_SteelTN FK >- CVC_START.FND_Increase_Dollar_per_SteelTN
FND_SteelTN_per_plan FK >- CVC_START.FND_SteelTN_per_plan
FND_Increase_Dollar_per_PT_Cable_LF FK >- CVC_START.FND_Increase_Dollar_per_PT_Cable_LF
FND_PT_Cable_LF_per_plan FK >- CVC_START.FND_PT_Cable_LF_per_plan
FND_Increase_Dollar_per_Pump_CY FK >- CVC_START.FND_Increase_Dollar_per_Pump_CY
Pump_CY_per_plan FK >- CVC_START.Pump_CY_per_plan
FND_Contract_Price FK >- CVC_START.FND_Contract_Price
FND_Requested_Increase FK >- CVC_START.FND_Requested_Increase
FND_Total FK >- CVC_START.FND_Total
FLT_Plan_Name FK >- CVC_START.FLT_Plan_Name
FLT_Plan_ElvOpt FK >- CVC_START.FLT_Plan_ElvOpt
Increase_Dollar_per_SF_DW FK >- CVC_START.Increase_Dollar_per_SF_DW
FLT_Item_DW FK >- CVC_START.FLT_Item_DW
FLT_Increase_Dollar_per_Front_Walk FK >- CVC_START.FLT_Increase_Dollar_per_Front_Walk
FLT_Item_Front_walk FK >- CVC_START.FLT_Item_Front_walk
FLT_Increase_Dollar_per_Porch FK >- CVC_START.FLT_Increase_Dollar_per_Porch
FLT_Item_Porch FK >- CVC_START.FLT_Item_Porch
FLT_Increase_Dollar_per_Stoop FK >- CVC_START.FLT_Increase_Dollar_per_Stoop
FLT_Item_Stoop FK >- CVC_START.FLT_Item_Stoop
FLT_Increase_Dollar_per_Patio FK >- CVC_START.FLT_Increase_Dollar_per_Patio
FLT_Item_Patio FK >- CVC_START.FLT_Item_Patio
FLT_Increase_Dollar_per_Service_Walk FK >- CVC_START.FLT_Increase_Dollar_per_Service_Walk
FLT_Item_Service_Walk FK >- CVC_START.FLT_Item_Service_Walk
FLT_Increase_Dollar_per_Approach FK >- CVC_START.FLT_Increase_Dollar_per_Approach
FLT_Item_Approach FK >- CVC_START.FLT_Item_Approach
FLT_Increase_Dollar_per_City_Walk FK >- CVC_START.FLT_Increase_Dollar_per_City_Walk
FLT_Item_City_Walk FK >- CVC_START.FLT_Item_City_Walk
FLT_Increase_Dollar_per_Steps FK >- CVC_START.FLT_Increase_Dollar_per_Steps
FLT_Item_Steps FK >- CVC_START.FLT_Item_Steps
FLT_Increase_Dollar_per_FW_VarItem1 FK >- CVC_START.FLT_Increase_Dollar_per_FW_VarItem1
FLT_Item_FW_VarItem1 FK >- CVC_START.FLT_Item_FW_VarItem1
FLT_Increase_Dollar_per_FW_VarItem2 FK >- CVC_START.FLT_Increase_Dollar_per_FW_VarItem2
FLT_Item_FW_VarItem2 FK >- CVC_START.FLT_Item_FW_VarItem2
FLT_Increase_Dollar_per_FW_VarItem3 FK >- CVC_START.FLT_Increase_Dollar_per_FW_VarItem3
FLT_Item_FW_VarItem3 FK >- CVC_START.FLT_Item_FW_VarItem3
FLT_Increase_Dollar_per_FW_VarItem4 FK >- CVC_START.FLT_Increase_Dollar_per_FW_VarItem4
FLT_Item_FW_VarItem4 FK >- CVC_START.FLT_Item_FW_VarItem4
FLT_Contract_Price FK >- CVC_START.FLT_Contract_Price
FLT_Requested_Increase FK >- CVC_START.FLT_Requested_Increase
FLT_Total FK >- CVC_START.FLT_Total
PublishBy
PublishDate

CVC_PLP
----
PK FK >- CVC_START.PK
Estimate_PK FK >- CVC_START.Estimate_PK
CompanyID FK >- CVC_START.CompanyID
DivisionID FK >- CVC_START.DivisionID
BuilderID FK >- CVC_START.BuilderID
JobNo Varchar pk FK >- CVC_START.JobNo
SubJobNo Varchar pk FK >- CVC_START.SubJobNo
Supervisor
PLP_PO_No
PLP_WarehouseNo
PLP_StagingLocation
PLP_PartDescription
PLP_PartNo
PLP_CostDistPartNo
PLP_BuiltOrder1
PLP_BuiltOrder2
PLP_BuiltOrder3
PLP_BuiltOrder4
PLP_BuiltOrder5
PLP_CostType
PLP_UofMPartNo
PLP_Order1
PLP_Order2
PLP_Order3
PLP_Order4
PLP_Order5
PublishBy
PublishDate

JC_IMPORT
----
CO_NO
DIV_NO
PROJJOB_NO
SUBPROJJOB_NO
JC_DIST
CT
BUDG_HOURS
BUDG_QTY
BUDG_AMOUNT
UNIT_MEASURE
ASBIDBUDG_AMOUNT

CI_IMPORT
----
COMPANY FK >- CVC_ContractInformationData.CompanyID
DIVISION FK >- CVC_ContractInformationData.DivisionID
CUSTOMER FK >- CVC_ContractInformationData.BuilderID
JOB_NUMBER FK >- CVC_ContractInformationData.JobNo
SUBJOB_NUMBER FK >- CVC_ContractInformationData.SubJobNo
CONTRACT FK >- CVC_ContractInformationData.Contract
ITEM_NUMBER FK >- CVC_ContractInformationData.ItemNumber
CONTRACT_DESCRIPTION FK >- CVC_ContractInformationData.Plan
CONTRACT_DESCRIPTION2 FK >- CVC_ContractInformationData.Address
EFFECTIVE_DATE FK >- CVC_ContractInformationData.EffectiveDate
CONTRACT_AMOUNT FK >- CVC_ContractInformationData.ContractAmount
ESTIMATED_QUANTITY FK >- CVC_ContractInformationData.Quantity
CONVERSION_UNIT_MEASURE FK >- CVC_ContractInformationData.Unit
UNIT_PRICE FK >- CVC_ContractInformationData.UnitPrice
JC_DIST_SUBJOB FK >- CVC_ContractInformationData.JCDistributionSubJob
JC_DISTRIBUTION FK >- CVC_ContractInformationData.JCDistribution
JC_DIST_COST_TYPE FK >- CVC_ContractInformationData.JCDistributionCostType
JC_DIST_RECORD_TYPE FK >- CVC_ContractInformationData.JCDistributionRecordType
FIXED_CONTRACT FK >- CVC_ContractInformationData.FixedContract
INCLUDE_IN_MARKUP FK >- CVC_ContractInformationData.IncludeInMarkup
TAXABLE_CODE1 FK >- CVC_ContractInformationData.TaxCode1
TAXABLE_CODE2 FK >- CVC_ContractInformationData.TaxCode2
TAXABLE_CODE3 FK >- CVC_ContractInformationData.TaxCode3
QUANTITY_CONTRACT_1TO4


CVC_START
----
PK
JobNo
SubJobNo
CVC_ContractInformation_PK FK >- CVC_ContractInformationData.CVC_ContractInformation_PK
Estimate_PK FK
CompanyID
DivisionID
BuilderID
ProjectName FK >- CVC_ContractInformationData.ProjectName
CustomerID FK >- CVC_ContractInformationData.CustomerID
Contract FK >- CVC_ContractInformationData.Contract
ItemNumber FK >- CVC_ContractInformationData.ItemNumber
Plan FK >- CVC_ContractInformationData.Plan
Address FK >- CVC_ContractInformationData.Address
EffectiveDate FK >- CVC_ContractInformationData.EffectiveDate
ContractAmount FK >- CVC_ContractInformationData.ContractAmount
Quantity
Unit
UnitPrice FK >- CVC_ContractInformationData.UnitPrice
JCDistributionSubJob FK >- CVC_ContractInformationData.JCDistributionSubJob
JCDistribution FK >- CVC_ContractInformationData.JCDistribution
JCDistributionCostType FK >- CVC_ContractInformationData.JCDistributionCostType
JCDistributionRecordType FK >- CVC_ContractInformationData.JCDistributionRecordType
FixedContract FK >- CVC_ContractInformationData.FixedContract
IncludeInMarkup FK >- CVC_ContractInformationData.IncludeInMarkup
TaxCode1 FK >- CVC_ContractInformationData.TaxCode1
TaxCode2 FK >- CVC_ContractInformationData.TaxCode2
TaxCode3 FK >- CVC_ContractInformationData.TaxCode3
PublishBy
PublishDate
CostCode
CostType
QuantityBare
Hours
Amount
FoundationSlabEdge
FoundationFootingSize
FoundationFootingRebar
FoundationFootingDowel
FoundationFootingWC
FoundationFootingPSI
FoundationSlabThickness
FoundationSlabReinforcement
FoundationRocksandThickness
FoundationUpperBaseThickness
FoundationUpperBaseType
FoundationLowerBaseThickness
FoundationLowerBaseType
FoundationVapoRetarder
FoundationWCRatio
FoundationPSI
FoundationContractName
FoundationContractDate
FoundationContractPricingPending
FoundationContractSOWPending
FoundationContractInsurancePending
FoundationContractNotesPending
FoundationProposal
FoundationBudget
FoundationLatestPlanLink
FoundationTaxRate
FoundationEquipment
FoundationGLInsurance
FoundationBudgetMargin
FoundationOverallLotCount
FoundationOutOfLevel
FoundationDeepenedFooting
FoundationWalls
FoundationCurrentConcreteQuote
FoundationConcreteQuoteDate
FoundationConreteIncreaseDate
FoundationMixDesignNo
FlatworkMixDesignNo
ContractRevision
Owner
Contractor
Subcontractor
ContractDate
Version
Lender
ContractType
LiquidatedDamages
TerminationTerms
TerminationPay
WarrantyPeriod
NoticeDays
PermittedDelays
StartDate
BondAmount
BondRequired
DateReceived
BondAgentNotified
LegalReviewDate
ScopeReviewDate
CommentsSentDate
CommentsResponseDate
ContractExecutedDate
ContractStatus
InsuranceStatus
OpsContactPerson
APContactPerson
ContactNumber
ContactAddress
CGLPolicy
WCPolicy
AutoPolicy
ExcessPolicy
GLOccupancyLimit
GLAggregateLimit
GLCompOpLimit
GLPollution
CompletedOpsReq
GLPersInjuryLimit
GLOccuranceClaim
GLLimit
WCBodilyInjuryLimit
WCDiseaseLimit
WCAggregateLimit
WCWaiverofSubrogration
ALOccuranceLimit
ALAggregateLimit
AdditionalInsured
CertificateHolders
UmbrellaPolicy
ExcessPolicyLimit
ExcellLineBacking
OCIP
OCIPCoverage
OCIPSubDeductible
OCIPOwnerDeductible
OCIPDeductibleType
OCIPTPA
OCIPBidCredit
OCIPOccurrenceLimit
OCIPAggregateLimit
OCIPExcessLimit
GLSubAccount
State
PrevalingWage
WageDeterminationReceived
CertifiedPayroll
ScheduleofValues
BillDate
PayDate
Retention
BillingInstructions
AddBillingInstructions
Lots
Slab_Type
Lot_No
Garage_Orientation
Plan_Name
Plan_ElvOpt
Contract_Price
Name_Add_For_1
Add_For_1
Name_Add_For_2
Add_For_2
Name_Add_For_3
Add_For_3
Name_Add_For_4
Add_For_4
TotalAdjusted
CVC_Contracts_PK
Contract_No
Contract_Description
Contract_Date
Builder_Eff_Release
Eff_Date
Identifying_Notes
Footprint_SF
Labor_MH
Concrete_CY
Rock_TN
Steel_LBS
PT_Cable_LF
Pumping_CY
Lumber_BF
Sage_Estimate_Amount
RFA_Amount
Proposal_Amount
Draw_1
Draw_2
Draw_3
Draw_4
OCIP_Amount
Contract_Amount
Contract_vs_Proposal_Delta
Delta_Variance_Percent
Created_by
Created date
Estimate_Name
Proposal_Name
Contract_File_Name
Notes
FND_Increase_Dollar_per_hour
FND_Hours_per_plan
FND_Increase_Dollar_per_CY
FND_CY_per_plan
FND_Increase_Dollar_per_RockTN
FND_RockTN_per_plan
FND_Increase_Dollar_per_SteelTN
FND_SteelTN_per_plan
FND_Increase_Dollar_per_PT_Cable_LF
FND_PT_Cable_LF_per_plan
FND_Increase_Dollar_per_Pump_CY
Pump_CY_per_plan
FND_Contract_Price
FND_Requested_Increase
FND_Total
FLT_Plan_Name
FLT_Plan_ElvOpt
Increase_Dollar_per_SF_DW
FLT_Item_DW
FLT_Increase_Dollar_per_Front_Walk
FLT_Item_Front_walk
FLT_Increase_Dollar_per_Porch
FLT_Item_Porch
FLT_Increase_Dollar_per_Stoop
FLT_Item_Stoop
FLT_Increase_Dollar_per_Patio
FLT_Item_Patio
FLT_Increase_Dollar_per_Service_Walk
FLT_Item_Service_Walk
FLT_Increase_Dollar_per_Approach
FLT_Item_Approach
FLT_Increase_Dollar_per_City_Walk
FLT_Item_City_Walk
FLT_Increase_Dollar_per_Steps
FLT_Item_Steps
FLT_Increase_Dollar_per_FW_VarItem1
FLT_Item_FW_VarItem1
FLT_Increase_Dollar_per_FW_VarItem2
FLT_Item_FW_VarItem2
FLT_Increase_Dollar_per_FW_VarItem3
FLT_Item_FW_VarItem3
FLT_Increase_Dollar_per_FW_VarItem4
FLT_Item_FW_VarItem4
FLT_Contract_Price
FLT_Requested_Increase
FLT_Total
PLP_PO_No FK >- CVC_PLP.PLP_PO_No
PLP_WarehouseNo FK >- CVC_PLP.PLP_WarehouseNo
PLP_PartDescription FK >- CVC_PLP.PLP_PartDescription
PLP_PartNo FK >- CVC_PLP.PLP_PartNo
PLP_CostDistPartNo FK >- CVC_PLP.PLP_CostDistPartNo
PLP_BuiltOrder1 FK >- CVC_PLP.PLP_BuiltOrder1
PLP_BuiltOrder2 FK >- CVC_PLP.PLP_BuiltOrder2
PLP_BuiltOrder3 FK >- CVC_PLP.PLP_BuiltOrder3
PLP_BuiltOrder4 FK >- CVC_PLP.PLP_BuiltOrder4
PLP_BuiltOrder5 FK >- CVC_PLP.PLP_BuiltOrder5
PLP_CostType FK >- CVC_PLP.PLP_CostType
PLP_UofMPartNo FK >- CVC_PLP.PLP_UofMPartNo
```





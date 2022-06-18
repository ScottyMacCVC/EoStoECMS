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
- What is TrueSight? TrueSight is a report with all job cost items in an importable form. It grabs the average cost per cost distribution. We can save reports in html form and potentially create a connection between the report and the SAGE budget. The START process in EoS should have a budget update step. It should grab the TrueSight report numbers and update the sub job START budget. We would improve the TrueSight Report $/units by building machine learning into either the html code or the report. 
- Where does the step need to occur? The step needs to occur during the early stages of the START Import Form. 
- Why is this step important? Our field needs the closest to actual budget as possible. 

![TrueSight Example](https://github.com/ScottyMacCVC/EoStoECMS/blob/main/Images/22.06.18-TrueSight%20Example.png)

![TrueSight Query](https://github.com/ScottyMacCVC/EoStoECMS/blob/main/Images/22.06.18-TrueSight%20Query.png)

### KnowledgeBase

## Overviews of CVC and Processes

### The Enterprise View
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

CVC_ContractInformationData
-
JobNo Varchar pk fk - CVC_START.JobNo
SubJobNo Varchar pk fk - CVC_START.SubJobNo
Contract varchar FK >- CVC_Contracts.ContractNo

CVC_JobInfoData
-
JobNo Varchar pk FK >- CVC_START.JobNo

CVC_LegalData
-
JobNo Varchar pk FK >- CVC_Contracts.JobNo

CVC_JobSpecData
-
JobNo Varchar pk fk - CVC_START.JobNo
SubJobNo Varchar pk fk - CVC_START.SubJobNo

CVC_JobCostData
-
JobNo Varchar
SubJobNo Varchar pk

CVC_Contracts
----
JobNo Varchar FK - CVC_START.JobNo
ContractNo Varchar pk

CVC_RFA
----
JobNo Varchar FK - CVC_START.JobNo
ContractNo Varchar pk FK >- CVC_Contracts.ContractNo

CVC_PLP
----
JobNo Varchar FK - CVC_START.JobNo
SubJobNo Varchar pk FK >- CVC_START.SubJobNo

CVC_START
----
JobNo Varchar pk FK - CVC_JobCostData.JobNo
SubJobNo Varchar pk FK - CVC_JobCostData.SubJobNo
Lot Varchar pk FK - CVC_JobCostData.SubJobNo
Estimate_PK
CompanyID 
DivisionID
BuilderID
ProjectName
CustomerID
Contract
ItemNumber
Plan
Address
EffectiveDate
ContractAmount
Quantity
Unit
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
CostCode
CostType
QuantityBare
Hours
Amount
PK
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
FoundationVaporRetarder
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
ContractStatus,
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
GLOccurance/Claim
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
Garage Orientation
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
CVC_Contracts_PK
Contract_No
Contract_Description
Contract_Date
Builder_Eff_Release
Eff Date
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
Supervisor
PO_No
Warehouse_No
Staging_Location



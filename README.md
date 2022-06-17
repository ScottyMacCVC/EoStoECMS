# EoStoECMS
Grand Project to encompass and map all steps within CVC's construction process

## Current Challenges

-We need to build one START using company 98 from EoS and then Mani can test the staging table import 

![Mani Email](https://github.com/ScottyMacCVC/EoStoECMS/blob/main/Images/22.06.17-Mani%20Email.png)

![Staging Tables-Job Cost Data](https://github.com/ScottyMacCVC/EoStoECMS/blob/main/Images/22.06.17-Staging%20Tables-Job%20Cost%20Data.png)

![Staging Tables-Contract Information](https://github.com/ScottyMacCVC/EoStoECMS/blob/main/Images/22.06.17-Staging%20Tables-Contract%20Information.png)


![Enterprise View of CVC](https://github.com/ScottyMacCVC/EoStoECMS/blob/main/Images/22.06.17-Enterprise%20View%20of%20CVC.png)

![START Process](https://github.com/ScottyMacCVC/EoStoECMS/blob/main/Images/22.06.17-START%20Process.png)

![Generalized Cycle](https://github.com/ScottyMacCVC/EoStoECMS/blob/main/Images/22.06.17-Generalized%20Cycle.png)

![Basic Controlling Unit](https://github.com/ScottyMacCVC/EoStoECMS/blob/main/Images/22.06.17-Basic%20Controlling%20Unit.png)


## Server\instance: CVC-SQL1\EOSNAVIGATOR_DEV
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
### ![CVC_ERD](https://github.com/ScottyMacCVC/EoStoECMS/blob/main/Images/22.06.17-CVC%20ERD%20for%20Estimating%20Universe4.png)
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
----
JobNo Varchar pk FK >- CVC_Contracts.JobNo
CVC_JobSpecData
----
JobNo Varchar pk fk - CVC_START.JobNo
SubJobNo Varchar pk fk - CVC_START.SubJobNo
CVC_JobCostData
----
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

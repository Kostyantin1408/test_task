import CompanyToolbar from "./CompanyToolbar";
import React, {useEffect, useState} from "react";

interface CompanyTileProps {
    id: string;
}


const CompanyTile: React.FC<CompanyTileProps> = ({ id }) => {
    const [companyData, setCompanyData] = useState(null);
    const [selectedCompany, setSelectedCompany] = useState(id);

    useEffect(() => {
        const getInfoAboutCompany = async () => {
            try {
                const response = await
                    fetch(`http://localhost:3000/${Number(selectedCompany) - 1}`);
                const data = await response.json();
                setCompanyData(data);
            } catch (error) {
                console.error('Error fetching JSON:', error);
            }
        };

        getInfoAboutCompany();
    }, [selectedCompany]);

    return (
        <div>
            {companyData ? (
                <div className="flex flex-col p-6 gap-4 text-xs overflow-y-auto">
                    <CompanyToolbar selectedCompany={selectedCompany}
                                    onChange={(newCompany) => setSelectedCompany(newCompany)} />
                    <div>
                        <span className="font-bold">ticker</span>: {companyData['ticker']}
                    </div>

                    <div>
                        <span className="font-bold">Name</span>: {companyData['name']}
                    </div>

                    <div>
                        <span className="font-bold">Legal name</span>: {companyData['legal_name']}
                    </div>

                    <div>
                        <span className="font-bold">Stock exchange</span>: {companyData['stock_exchange']}
                    </div>

                    <div>
                        <span className="font-bold">Short description</span>: {companyData['short_description']}
                    </div>

                    <div>
                        <span className="font-bold">Long description</span>: {companyData['long_description']}
                    </div>

                    <div>
                        <span className="font-bold">Web</span>: {companyData['company_url']}
                    </div>

                    <div>
                        <span className="font-bold">Business address</span>: {companyData['business_address']}
                    </div>

                    <div>
                        <span className="font-bold">Business phone</span>: {companyData['business_phone_no']}
                    </div>

                    <div>
                        <span className="font-bold">Entity legal form</span>: {companyData['entity_legal_form']}
                    </div>

                    <div>
                        <span className="font-bold">Latest filling date</span>: {companyData['latest_filing_date']}
                    </div>

                    <div>
                        <span className="font-bold">Inc country</span>: {companyData['inc_country']}
                    </div>

                    <div>
                        <span className="font-bold">Employees</span>: {companyData['employees']}
                    </div>

                    <div>
                        <span className="font-bold">Sector</span>: {companyData['sector']}
                    </div>

                    <div>
                        <span className="font-bold">Industry category</span>: {companyData['industry_category']}
                    </div>

                    <div>
                        <span className="font-bold">Industry group</span>: {companyData['industry_group']}
                    </div>

                    <div>
                        <span className="font-bold">First stock price date</span>:
                        {companyData['first_stock_price_date']}
                    </div>

                    <div>
                        <span className="font-bold">Last stock price date</span>:
                        {companyData['last_stock_price_date']}
                    </div>

                    <div>
                        <span className="font-bold">Thea enabled true legacy sector</span>:
                        {companyData['legacy_sector']}
                    </div>

                    <div>
                        <span className="font-bold">Legacy industry category</span>:
                        {companyData['legacy_industry_category']}
                    </div>

                    <div>
                        <span className="font-bold">Legacy industry group</span>:
                        {companyData['legacy_industry_group']}
                    </div>
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
}

export default CompanyTile;
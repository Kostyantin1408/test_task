import React from 'react';
import { companies } from "../utils/companies";

interface CompanyToolbarProps {
    selectedCompany: string;
    onChange: (companyId: string) => void;
}

const CompanyToolbar: React.FC<CompanyToolbarProps> = ({ selectedCompany, onChange }) => {
    return (
        <div>
            <label className="mr-2">
                Select Company:
            </label>
            <select
                value={selectedCompany}
                onChange={(e) => onChange(e.target.value)}
            >
                {Object.entries(companies).map(([id, name]) => (
                    <option key={id} value={id}>
                        {name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default CompanyToolbar;

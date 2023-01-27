import React from "react";
import { Link } from "react-router-dom";

/** CompanyCard: renders individual company card
 *
 * Props:
 * - company: object of a company
 *
 * CompanyList -> CompanyCard
 */
function CompanyCard({ company }) {

  return (
    <Link to={`/companies/${company.handle}`} className="CompanyCard">
      <div className="CompanyCard-name">{company.name}</div>

      <div className="CompanyCard-description">{company.description}</div>

      {company.logoUrl && <div className="CompanyCard-logo">
        <img
          src={company.logoUrl}
          alt={`logo of ${company.name}`}
        />
      </div>}
    </Link>
  );
}

export default CompanyCard;
//node modules
import React from "react";
import NewGrexterFooter from "../../components/newFooter/index";
import FixedHeader from "../FixedHeader";
import KeywordFooter from "../KeywordFooter";

//styling
import "./style.css";

const TermsAndConditions = props => {
  return (
    <>
      <FixedHeader searchicon={false} />
      <div className="container grid">
        <h1 class="terms">Terms & Conditions</h1>
        <h4>
          COVENANTS AND CONDITIONS TO BE OBSERVED AND PERFORMED BY THE LESSEE:
        </h4>
        <ol type="1">
          <li>
            To pay to the Lessor or its nominees/permitted assigns, the monthly
            rental charges under the Lease Deed by the Lessee, monthly in
            advance on or before 5th day of calendar month (due date), for the
            month in respect of which such sums are payable whether or not the
            invoice has been received by the Lessee or not.
          </li>
          <li>
            {" "}
            To be liable to pay a late payment fee of INR 100 per day till 10th
            of the month and then INR 200 per day thereafter for the period of
            delay of payment of monthly rent beyond the due date by the Lessee.
            After 15th of the month, the Lessee will receive an eviction notice
            to clear the Leased premises by end of the month for which rent is
            due. This is without prejudice to any other right which the Lessor
            may have under the law.
          </li>
          <li>
            {" "}
            To pay all amounts agreed to be paid in accordance with the terms of
            the Deed, provided, however, that the liability of the Lessee for
            such payments shall commence from the date such
            revision/imposition/increase is effective from the Lease
            Commencement Date or any subsequent date.
          </li>
          <li>
            To carry out day-to-day maintenance of the Leased Premises and the
            fixtures and fittings installed therein and the normal maintenance,
            minor repairs, including painting and distempering and polishing the
            interior of the Leased Premises at its own cost.
          </li>
          <li>
            {" "}
            To permit the Lessor and its authorised representatives at all
            reasonable hours, but after prior notice in writing to that effect,
            to enter into the Leased Premises for the purpose of inspection or
            for any other purposes connected with the Deed. However, in case of
            emergencies the Lessor or Grexter may enter the Leased Premises at
            any time without notice to the Lessee and the Lessee accepts and
            agrees to the same.
          </li>
          <li>
            {" "}
            To vacate the Leased Premises together with the Lessor's fixtures
            and fittings therein, in good order and condition (reasonable wear
            and tear excepted) on the expiry /earlier termination of the Lease
            Term.
          </li>
          <li>
            Not to do or permit to be done any act or thing which may render
            void or voidable any insurance relating to or in respect of a part
            or the whole of the said Property, the said Building or the Leased
            Premises, or cause any increase in premium payable in respect
            thereof.
          </li>
          <li>
            {" "}
            To use the Leased Premises for lawful purpose only and not to carry
            on or permit to be carried on in the Leased Premises or in any part
            thereof any activities which shall be or are likely to be unlawful,
            obnoxious or of nuisance, annoyance or disturbance to other
            lessee(s) of the said Building wherein the Leased Premises are
            situated or store any goods of hazardous or combustible nature or
            which are heavy so as to affect the construction or the structure of
            the said Building or any part thereof or in any manner interfere for
            common use. The usage of the Leased Premises for such lawful purpose
            shall be unrestricted and uninterrupted and shall be made available
            at all times of day and night to the Lessee, servants,
            representatives, visitors and invitees.
          </li>
          <li>
            {" "}
            The Leased Premises shall be used by the Lessee only and the Lessee
            undertakes that it shall not assign, transfer, mortgage, sublease,
            sublet or underlet or grant lease or transfer or part with in any
            manner whatsoever, of any portion of the Leased Premises, to any
            third party without obtaining the prior written approval of the
            Lessor.
          </li>
          <li>
            {" "}
            The Lessee shall not make any structural additions or alterations in
            the Leased Premises without prior consent of the Lessor in writing.
          </li>
          <li>
            {" "}
            At the time of handover of the Leased Premises, the Lessee is
            satisfied that the construction work and also various installations
            like electrification work, sanitary fittings, water and sewerage
            connections are in good working condition and all
            shortcomings/complaints and defects, if any, have been rectified
            before it’s taken possession from the Lessor. Grexter will take care
            of any wear and tear in the Leased premises in the first 10 days
            from first occupancy date of the Lessee, only if, the Lessee
            notifies the same in writing, thereafter it shall not require the
            Lessor or its nominees/permitted assigns to perform any work
            whatsoever in the Leased Premises (except structural repairs if any)
            and there shall be no obligation whatsoever on the part of the
            Lessor to repair, renovate, improvise or to do anything concerning
            the Leased Premises, the said Building and the said Property in any
            manner whatsoever.
          </li>
          <li>
            Any lapse/violation/negligence on the part of the Lessee or its
            contractors / agents during any additions/modifications/alterations
            resulting in any kind of hazard or fire in the Leased Premises/
            Building, loss of life/ property including third party, damage to
            the Leased Premises / building structure etc. and all financial and
            legal consequences arising there from shall be the sole
            responsibility of the Lessee and shall not impose any legal and
            financial liability on the Lessor.
          </li>
          <li>
            The Tenant shall bear any utility costs - electricity, water and
            other utilities consumed by him/her in the Schedule Premises based
            on actual rates of the concerned statutory authority, during the
            term of the License and any renewal thereof. The Tenant shall be
            responsible for payment of the dues. The Company reserves the right
            to deduct any unpaid utility costs from the security deposit.
          </li>
        </ol>
        <h4>
          COVENANTS AND CONDITIONS TO BE OBSERVED AND PERFORMED BY THE LESSOR:
        </h4>
        <ol type="1">
          <li>
            {" "}
            To carry out at its own cost all major and structural repairs to the
            Leased Premises and also to the said Building.
          </li>
          <li>
            {" "}
            To supply and maintain regular supply of electricity and water to
            the Leased Premises.
          </li>
          <li>
            {" "}
            To permit to carry out at the cost of the Lessee, but without in any
            way damaging the main structure of the Leased Premises or the said
            Building, erection of internal partitions and other internal
            alterations and additions which are not visible from outside, as may
            be necessary for the business of the Lessee provided the Lessee
            shall give prior written intimation of 10 (ten) days to the Lessor
            in writing before commencing such alteration(s) or addition(s),
            provided, further that if any such additions or alterations, require
            the prior approval or permission of any Municipality or any other
            local body or authority, local or otherwise, or are governed by any
            rules or regulations. The Lessee shall not carry out such additions
            or alterations or erections without obtaining the prior permission
            or approval aforesaid and complying with such rules and regulations
            of such Municipal or local body or Government Authority. Provided
            further, that the Lessee shall upon vacating the Leased Premises
            remove such fittings and restore the Leased Premises to the Lessor
            in its original condition excepting reasonable wear and tear.
          </li>
          <li>
            {" "}
            The lessor shall be liable to pay all maintenance, electricity,
            telephone and water charges that would have arisen with respect to
            the said Schedule Premises prior to the commencement of the License,
            if applicable.
          </li>
          <li>
            {" "}
            To allow during the term of the Deed, peaceful and uninterrupted
            enjoyment of the Leased Premises, subject to the Lessee performing
            all its obligations under this Deed.
          </li>
        </ol>
        <h4>
          Division of responsibilities for maintenance of the premises between
          the Lessor and the Lessee
        </h4>
        <p className="toc-content">
          The following has been prepared in compliance with Model Residential
          Tenancy Act 2011, a draft by Ministry of Housing & Urban poverty
          alleviation, Govt. of India. As per this draft Act, the lessor will be
          responsible for repairs relating to matters falling under Part A and
          the lessee shall be responsible for matters falling under Part B.
        </p>
        <p className="toc-content">
          Part A : Structural Repairs to be got done by the Lessor:
        </p>
        <ol type="1">
          <li>
            Structural Repairs except those necessitated by the damage caused by
            the lessee
          </li>
          <li>
            Whitewashing of walls and painting of doors and windows. The Lessor
            shall paint the interior, doors & windows at the beginning of the
            agreement period.
          </li>
          <li>Changing plumbing pipes when necessary</li>
          <li>
            Any major repair due to natural wear & tear of appliances &
            furniture. The Lessor shall pay for such damages if they cause it.
          </li>
          <li>
            Any repair, replacement & maintenance issues arising during the
            first 10 days of the first occupancy date of the Lessee of the
            agreement period. Thereafter, the charges for such maintenance shall
            be borne by the Lessee.
          </li>
        </ol>
        <p className="toc-content">
          Part B : Day-to-Day repairs to be got done by the Lessee
        </p>
        <ol type="1">
          <li>Changing of tap washers and taps</li>
          <li>Drain cleaning</li>
          <li>Water closet repairs</li>
          <li>Wash Basin repairs</li>
          <li>Bath tub repairs</li>
          <li>Geyser repairs</li>
          <li>Circuit breaker repairs</li>
          <li>Switches and socket repairs, Replacement of bulbs</li>
          <li>
            Repairs and replacement of electrical equipment except major
            internal and external wiring change
          </li>
          <li>Kitchen fixtures repairs</li>
          <li>
            Replacement of knobs and locks of doors, cupboard windows etc.
          </li>
          <li>Replacement of flynets</li>
          <li>Replacement of glass panels in windows, doors etc.</li>
          <li>
            Periodic maintenance of private gardens and open spaces, if any, let
            out to the tenant.
          </li>
        </ol>
        <h4>HOUSE RULES</h4>
        <ol type="1">
          <li>All garbage must be disposed off daily in bags.</li>
          <li>
            Please do not partake in any activity that causes damage to the
            property and/or inconveniences to the owner or neighbours . This
            also includes consumption of banned substances inside or outside
            your premises.
          </li>
          <li>
            Excess noise is prohibited. This includes: music, TV, slamming of
            doors, shouting etc. in the property and/or surrounding areas,
            particularly in residential areas in hours of rest. Noise is a
            frequent cause of complaint between the neighbours, who may call
            security in the event of nuisance;
          </li>
          <li>
            The doors and windows of the house must be closed when nobody is
            inside. This will help avoid possible robberies and any damage to
            the property;
          </li>
          <li>
            Any criminal or offensive conduct that will entail the intervention
            of the Municipal Police or other Government agencies is prohibited
            hereunder;
          </li>
          <li>
            Carrying out any construction work or reforms of any type on the
            property, or making any alterations of any type to the layout and
            distribution of the furnishings in the property is not allowed
            without prior written approval.
          </li>
          <li>
            Using the premise for any purpose other than Permitted Use is
            prohibited
          </li>
          <li>
            The Lessor has the right to terminate the license with a 24 hour
            notice or both in the event of any of the following happening.
            <ol type="a">
              <li>
                Written complaint from the housing society/association against
                the tenant.
              </li>
              <li>
                In the event of the tenant using the scheduled premise for
                reasons other than residential.
              </li>
            </ol>
          </li>
        </ol>
        <h4>GUEST HOSTING POLICY </h4>
        <p className="toc-content">
          The Lessor shall be held responsible for conduct of his/her guests in
          the premise & its consequences thereafter. Any financial losses
          incurred shall be borne by the tenant.
        </p>
        <h4>THEFT POLICY</h4>
        <p className="toc-content">
          The tenant shall be responsible for his/her belongings in the
          scheduled premise. The lessor or Grexter shall not be liable for any
          theft of personal belongings of the lessee.
        </p>
      </div>
      <NewGrexterFooter />
      <KeywordFooter />
    </>
  );
};

export default TermsAndConditions;

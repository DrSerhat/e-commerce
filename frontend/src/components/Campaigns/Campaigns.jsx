import CampaignItem from "./CampaignItem.jsx"
import "./campaigns.css"

const Campaigns = () => {
  return (
  <section className="campaigns">
    <div className="container">
      <div className="campaigns-wrapper">
        <CampaignItem />
        <CampaignItem />
      </div>
      <div className="campaigns-wrapper">
        <CampaignItem />
        <CampaignItem />
      </div>
    </div>
  </section>
  )
}

export default Campaigns
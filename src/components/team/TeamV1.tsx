import TeamData from "@/assets/jsonData/team/TeamData.json";
import SingleTeamV1 from "./SingleTeamV1";

const TeamV1 = () => {
  return (
    <>
      <div className="team-style-one-area default-padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
              <div className="site-heading text-center">
                {/* <h4 className="sub-title">Багийн гишүүд</h4> */}
                <h2 className="title">Манай баг хамт олон</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="team-style-one-items">
            <div className="row">
              {TeamData.slice(0, 4).map((team) => (
                <div className="col-xl-3 col-lg-4 mb-50" key={team.id}>
                  <SingleTeamV1 team={team} />
                </div>
              ))}
            </div>
            <div className="row">
              {TeamData.slice(4, 8).map((team) => (
                <div className="col-xl-3 col-lg-4 mb-50" key={team.id}>
                  <SingleTeamV1 team={team} />
                </div>
              ))}
            </div>
            <div className="row">
                <div className="col-xl-3 col-lg-4 mb-50" >
                  <SingleTeamV1 team={TeamData[8]} />
                </div>
            </div>
            {/* <div className="row">
              <div className="col-xl-9 offset-xl-3 col-lg-12">
                <div className="team-grid">
                  <div className="row">
                    {TeamData.slice(4, 8).map((team) => (
                      <div className="col-xl-4 col-lg-4 mb-50" key={team.id}>
                        <SingleTeamV1 team={team} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamV1;

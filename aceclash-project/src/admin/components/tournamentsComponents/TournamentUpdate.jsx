import '../../styles/tournamentForm.css'

const TournamentUpdate = () => {
  return (
    <>
    <div >
      <h2>Tournament Update</h2>
      <div className="d-flex justify-content-center">
      <form className="w60">
      <div className="mb-3">
          <label htmlFor="imgTournament" className="form-label">img url for Tournament</label>
          <input type="text" className="form-control" id="imgTournament" />
         
        </div>

        <div className="mb-3">
          <label htmlFor="nameTournament" className="form-label">name for Tournament</label>
          <input type="text" className="form-control" id="nameTournament" />
         
        </div>

        <div className="mb-3">
          <label htmlFor="descTournament" className="form-label">description for Tournament</label>
          <input type="text" className="form-control" id="descTournament" />
         
        </div>

        <div className="mb-3">
          <label htmlFor="locationTournament" className="form-label">location for Tournament</label>
          <input type="text" className="form-control" id="locationTournament" />
         
        </div>

        <div className="mb-3">
          <label htmlFor="cityTournament" className="form-label">city</label>
          <input type="text" className="form-control" id="cityTournament" />
         
        </div>

        <div className="mb-3">
          <label htmlFor="countryTournament" className="form-label">country</label>
          <input type="text" className="form-control" id="countryTournament" />
         
        </div>
        <div className="mb-3">
          <label htmlFor="dateTournament" className="form-label">date</label>
          <input type="date" className="form-control" id="dateTournament" />
         
        </div>

        <div className="mb-3">
          <label htmlFor="capacityTournament" className="form-label">capacity available</label>
          <input type="number" className="form-control" id="capacityTournament" />
         
        </div>
        
    
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      </div>
        </div>
    </>
  );
};

export default TournamentUpdate;

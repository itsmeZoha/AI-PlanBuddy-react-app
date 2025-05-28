import React from 'react';

function TripBudgetDetail({ trip }) {
  const budget = trip?.TripData?.estimatedBudget ?? null;

  return (
    <div>
      <h2 className="font-black text-3xl mt-5">Estimated Trip Budget</h2>

      {!budget ? (
        <p className="text-gray-600 mt-3">No budget information available at the moment.</p>
      ) : (
        <div className="my-5 border p-4 rounded-lg shadow-sm bg-white">
          <p className="text-sm text-gray-800 mt-1">
            <strong>Accommodation:</strong> {budget.accommodationUSD}
          </p>

          <p className="text-sm text-gray-800 mt-1">
            <strong>Activities & Tours:</strong> {budget.activitiesAndToursUSD}
          </p>

          <p className="text-sm text-gray-800 mt-1">
            <strong>Flights:</strong> {budget.flightsUSD}
          </p>

          <p className="text-sm text-gray-800 mt-1">
            <strong>Food & Drinks:</strong> {budget.foodAndDrinksUSD}
          </p>

          <p className="text-sm text-gray-800 mt-1">
            <strong>Local Transport:</strong> {budget.localTransportUSD || budget.totalEstimatedUSD_IfDrivingOwnVehicle}
          </p>

          <p className="text-sm text-gray-800 mt-1">
            <strong>Miscellaneous:</strong> {budget.miscellaneousUSD}
          </p>

          <p className="text-lg font-semibold text-green-700 mt-4">
            Total Estimated Budget: {budget.totalEstimatedUSD || budget.totalEstimatedUSD_IfFlying}
          </p>
        </div>
      )}
    </div>
  );
}

export default TripBudgetDetail;

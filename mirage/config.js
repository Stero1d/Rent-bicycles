export default function() {
  this.namespace = '/api';

  let rentals = [{
      type: 'rentals',
      id: 'comanche-niagara-comp',
      attributes: {
        title: 'Comanche Niagara Comp',
        owner: 'Veruca Salt',
        rentalpoint: 'Москва',
        type: 'Горный',
        bedrooms: 24,
        image: '../assets/serviceImages/Merida_Matts_6.15.jpg',
        description: "Convenience is at your doorstep with this charming downtown rental. Great restaurants and active night life are within a few feet."
      }
    }, {
      type: 'rentals',
      id: 'norco-torm-7.2',
      attributes: {
        title: 'Norco Storm 7.2',
        owner: 'Mike Teavee',
        rentalpoint: 'Пермь',
        type: 'Дорожный',
        bedrooms: 21,
        image: '../assets/serviceImages/Comanche_ONTARIO_FLY_26.jpg',
        description: "Convenience is at your doorstep with this charming downtown rental. Great restaurants and active night life are within a few feet."
      }
    }, {
      type: 'rentals',
      id: 'gt-avalanche-comp',
      attributes: {
        title: 'GT AVALANCHE COMP',
        owner: 'Mike Teavee',
        rentalpoint: 'Пермь',
        type: 'Дорожный',
        bedrooms: 24,
        image: '../assets/serviceImages/Comanche_ONTARIO_FLY_26.jpg',
        description: "Convenience is at your doorstep with this charming downtown rental. Great restaurants and active night life are within a few feet."
      }
    }, {
      type: 'rentals',
      id: 'trek-2015-3500',
      attributes: {
        title: 'Trek-2015 3500',
        owner: 'Violet Beauregarde',
        rentalpoint: 'Пермь',
        type: 'Дорожный',
        bedrooms: 18,
        image: '../assets/serviceImages/Merida_Matts_6.15.jpg',
        description: "Convenience is at your doorstep with this charming downtown rental. Great restaurants and active night life are within a few feet."
      }
      }, {
      type: 'rentals',
      id: 'trek-2015-3500',
      attributes: {
        title: 'Trek-2015 3500',
        owner: 'Violet Beauregarde',
        rentalpoint: 'Пермь',
        type: 'Дорожный',
        bedrooms: 18,
        image: '../assets/serviceImages/Merida_Matts_6.15.jpg',
        description: "Convenience is at your doorstep with this charming downtown rental. Great restaurants and active night life are within a few feet."
      }
    }];

  this.get('/rentals', function(db, request) {
    if(request.queryParams.rentalpoint !== undefined) {
      let filteredRentals = rentals.filter(function(i) {
        return i.attributes.rentalpoint.toLowerCase().indexOf(request.queryParams.rentalpoint.toLowerCase()) !== -1;
      });
      return { data: filteredRentals };
    } else {
      return { data: rentals };
    }
  });
  this.get('/rentals/:id', function (db, request) {
    return { data: rentals.find((rental) => request.params.id === rental.id) };
  });
  this.get('/history-rents', function(db, request) {
     if (!Ember.isNone(request.queryParams.id)) {
     return { data: db.db.historyRents.where(function(paramId) {
        return paramId.attributes.rentalid === request.queryParams.id})
      };
     } else {
       return { data: db.db.historyRents};
     }
  });
  this.post('/history-rents', function (db, request) {
    let obj = JSON.parse(request.requestBody);
    db.db.historyRents.insert(obj.data);
    return obj;
  });

};
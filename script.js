// Magazzino di dolci
const inventory = {
    Tiramisù: 5,
    Ciambella: 10,
    CannoliSiciliani: 8,
    SfogliatelleRicce: 7,
    PastieraNapoletana: 10,
    PanDiSpagna: 3,
    ZuppaInglese: 12,
    CheesecakeFruttiDiBosco: 6,
    CheesecakeNutella: 7,
  };
  
  function checkAvailability(item) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (inventory[item] > 0) {
          resolve(`${item} disponibile. Puoi procedere con l'ordine.`);
        } else {
          reject(`${item} non disponibile al momento.`);
        }
      }, 1000); // Simula un ritardo di 1 secondo per il controllo di disponibilità
    });
  }
  
  document.getElementById('orderBtn').addEventListener('click', function() {
    const selectedItem = document.getElementById('item').value;
    const statusElement = document.getElementById('status');
  
    statusElement.textContent = 'Verifica disponibilità...';
  
    checkAvailability(selectedItem)
      .then((message) => {
        statusElement.textContent = message;
        // Simuliamo il processo di ordine
        inventory[selectedItem] -= 1;
      })
      .catch((error) => {
        statusElement.textContent = error;
      });
  });
  
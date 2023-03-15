// Given:
const sarah = { name: "sarah", savings: 500, checking: 300 };
const toby = { name: "toby", savings: 500, checking: 300 };
const john = { name: "john", savings: 900 };
const bruce = { name: "bruce", checking: 200 };
const carol = { name: "carol", savings: 500, checking: 600 };
const jim = { name: "jim", checking: 200 };
const casey = { name: "casey", savings: 500, checking: 200 };
const nich = { name: "nich" };
// advisors below
const mark = { name: "mark", clients: [carol, toby, nich] };
const holly = { name: "holly", clients: [john, jim, bruce, sarah] };
const cindy = { name: "cindy", clients: [casey] };
const bob = { name: "bob", clients: null };
// firms below
const hsbc = { name: "hsbc", advisors: null };
const chase = { name: "chase", advisors: [mark, holly] };
const citiBank = { name: "citiBank", advisors: [cindy, bob] };

const firms = [chase, citiBank, hsbc];
// Part A. write a function that takes a firms array and return full client data and sorted by biggest savings amount, checking amount, then by client name.
// clients = [
//  ...
//  {name: ‘sarah’: savings: 500, checking: 300, advisor: ‘mark’, firm: ‘chase’},
//  {name: ‘toby’: savings: 500, checking: 300, advisor: ‘holly’, firm: ‘chase’},
//

const getClients = (firmsParam) => {
  const clientsArray = [];
  firmsParam.forEach(({ name: firmName, advisors }) => {
    const isAdvisorPresent = advisors !== null;
    if (isAdvisorPresent) {
      advisors.forEach(({ name: advisorName, clients }) => {
        const isClientsPressent = clients !== null;
        if (isClientsPressent) {
          clients.forEach((clentData) => {
            const clientObjectToPush = {
              ...clentData,
              advisor: advisorName,
              firm: firmName,
            };
            clientsArray.push(clientObjectToPush);
          });
        } else {
          const advisorObjectToPush = {
            advisor: advisorName,
            firm: firmName,
          };
          clientsArray.push(advisorObjectToPush);
        }
      });
    } else {
      const clientObjectToPush = {
        advisor: null,
        firm: firmName,
      };
      clientsArray.push(clientObjectToPush);
    }
  });
  // code
  //   console.dir(firmsParam, { depth: null });

  clientsArray.sort((a, b) => {
    if (a.savings !== b.savings) {
      return (b.savings || 0) - (a.savings || 0);
    }
    if (b.checking !== a.checking) {
      return (b.checking || 0) - (a.checking || 0);
    }

    if (a.name === b.name) {
      return 0;
    }
    if (b.name < a.name) {
      return 1;
    }
    return -1;
  });

  return clientsArray;
};

// console.dir(firms, { depth: null });
// console.log(getClients(firms));

// Part B. From list of clients, construct a firms array object
// firms = [
//  ...
//  {name: 'chase': advisors: [...]},
//  {name: 'citiBank': advisors: [...]},
//  ...
// ]

const getFirms = (clientsArray) => {
  const dicionaryOfClients = clientsArray.reduce((acc, each) => {
    const {
      firm: firmName = null,
      advisor: advisorName = null,
      name,
      savings,
      checking,
    } = each || {};
    const objectToPush = {
      name,
      savings,
      checking,
    };
    if (!acc[firmName]) {
      acc[firmName] = {};
    }
    if (!acc[firmName][advisorName]) {
      if (!advisorName) {
        acc[firmName] = null;
        return acc;
      }
      if (!name) {
        acc[firmName][advisorName] = null;
      } else {
        acc[firmName][advisorName] = [objectToPush];
      }
    } else {
      acc[firmName][advisorName].push(objectToPush);
    }
    return acc;
  }, {});
  const arrayOfFirms = Object.entries(dicionaryOfClients).map(
    ([firmName, advisorObject]) => {
      if (advisorObject === null) {
        return { name: firmName, advisors: null };
      }
      const advisorArray = Object.entries(advisorObject).map(
        ([advisorName, clientsArray]) => {
          return {
            name: advisorName,
            clients: clientsArray,
          };
        }
      );
      const firmObject = { name: firmName, advisors: advisorArray };

      return firmObject;
    }
  );
  return arrayOfFirms;
};

console.dir(getFirms(getClients(firms)), { depth: null });

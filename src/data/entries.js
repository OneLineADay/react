
export const entries = [
  {
    entryid: 0,
    entrydate: "24-10-2019",
    text: "This is a test text"
  },
  {
    entryid: 1,
    entrydate: "24-01-2018",
    text: "Today has been awesome"
  },
  {
    entryid: 2,
    entrydate: "24-01-2017",
    text: "The supper dummy day"
  },
  {
    entryid: 3,
    entrydate: "24-01-2016",
    text: "Today has been awesome"
  },
  {
    entryid: 4,
    entrydate: "24-01-2015",
    text: "The supper dummy day"
  },
  {
    entryid: 5,
    entrydate: "24-01-2014",
    text: "The super dummy day"
  },
  {
    entryid: 6,
    entrydate: "24-01-2013",
    text: "Today has been awesome"
  },
  {
    entryid: 7,
    entrydate: "24-01-2012",
    text: "The supper dummy day"
  },
  {
    entryid: 8,
    entrydate: "24-01-2011",
    text: "Today has been awesome"
  },
  {
    entryid: 9,
    entrydate: "24-01-2010",
    text: "The supper dummy day"
  }
];

const newEntry = {
  entryid: (entries.length +1),
  entrydate: `24-10-2019`,
  text: ''
}

export const addEntry = (entry) => {
  console.log('Adding entry:', entry);
  entries.push(
    {
      ...newEntry,
      text: entry.text
    }

    
  );console.log('New set if ents', entries)
}
'use strict';

// eslint-disable-next-line no-unused-vars
const config = {
  style: 'mapbox://styles/mapbox/light-v11',
  accessToken:
    'pk.eyJ1IjoiaW4tZHJ6IiwiYSI6ImNsZXhxdWNmOTFxZDQzdnFvYmRhdHl0czQifQ.fJZWF9JhBmdx-DbEY4deow',
  CSV: 'https://docs.google.com/spreadsheets/d/1YvbSE3Lg-osHDwpM3_wCIdLEBk2riEFbu7j2Il1xogc/gviz/tq?tqx=out:csv&sheet=resource_responders',
  CSV2: 'https://docs.google.com/spreadsheets/d/1YvbSE3Lg-osHDwpM3_wCIdLEBk2riEFbu7j2Il1xogc/gviz/tq?tqx=out:csv&sheet=bag_donations',
  center: [-118.254643, 34.049157],
  zoom: 10,
  title: 'Resource Responders',
  description:
    'This is a tool to find resources in Los Angeles and the surrounding areas. You can find the nearest food pantries, fridges, or shelters with just a few clicks',
  sideBarInfo: {
  resource_responders: ['full_name', 'email_address', 'physical_address'],
  bag_donations: [
    'full_name',
    'email_address',
    'phone_number',
    'physical_address',
    'pick_up',
    'number_and_type',
    'notes_second_location'
    ]
  },
  popupInfo: ['full_name'],
  filters: [
    {
      type: 'dropdown',
      title: 'Languages supported: ',
      columnHeader: 'Languages',
      listItems: [
        'English',
        'Spanish',
      ],
    },
    {
      type: 'checkbox',
      title: 'Devices available: ',
      columnHeader: 'Devices_available', // Case sensitive - must match spreadsheet entry
      listItems: ['Computer', 'Wi-Fi', 'Adaptive Laptops'], // Case sensitive - must match spreadsheet entry; This will take up to six inputs but is best used with a maximum of three;
    },
    {
      type: 'dropdown',
      title: 'Clients: ',
      columnHeader: 'Clients',
      listItems: [
        'Adults',
      ],
    },
  ],
};

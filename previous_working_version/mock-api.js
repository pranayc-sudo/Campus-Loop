/**
 * CampusLoop Standalone Mock API & Live Gemini Flash Vision Engine
 */
(function() {
  window.CAMPUSLOOP_API = "/api";
  var SEED_OVERVIEW = {
    "ts":  "2026-10-22T17:21:16.993201+00:00",
    "ist_hour":  22.5,
    "health_score":  94.0,
    "kpis":  {
                 "total_kg":  728.8,
                 "diversion_rate":  59.7,
                 "active_bins":  63,
                 "critical_zones":  0,
                 "scans_today":  10,
                 "guardrail_hits":  3,
                 "revenue_inr":  5880,
                 "co2_saved_kg":  406.7
             },
    "composition":  [
                        {
                            "name":  "Organic",
                            "value":  52
                        },
                        {
                            "name":  "Recyclable",
                            "value":  31
                        },
                        {
                            "name":  "Non-Recyclable",
                            "value":  17
                        }
                    ],
    "hourly":  [
                   {
                       "hour":  "00:00",
                       "organic":  5.5,
                       "recyclable":  3.3,
                       "non_recyclable":  1.8,
                       "capacity":  48.6
                   },
                   {
                       "hour":  "01:00",
                       "organic":  5.5,
                       "recyclable":  3.3,
                       "non_recyclable":  1.8,
                       "capacity":  48.6
                   },
                   {
                       "hour":  "02:00",
                       "organic":  5.5,
                       "recyclable":  3.3,
                       "non_recyclable":  1.8,
                       "capacity":  48.6
                   },
                   {
                       "hour":  "03:00",
                       "organic":  5.5,
                       "recyclable":  3.3,
                       "non_recyclable":  1.8,
                       "capacity":  48.6
                   },
                   {
                       "hour":  "04:00",
                       "organic":  5.5,
                       "recyclable":  3.3,
                       "non_recyclable":  1.8,
                       "capacity":  48.6
                   },
                   {
                       "hour":  "05:00",
                       "organic":  5.5,
                       "recyclable":  3.3,
                       "non_recyclable":  1.8,
                       "capacity":  48.6
                   },
                   {
                       "hour":  "06:00",
                       "organic":  12.6,
                       "recyclable":  7.5,
                       "non_recyclable":  4.1,
                       "capacity":  48.6
                   },
                   {
                       "hour":  "07:00",
                       "organic":  12.6,
                       "recyclable":  7.5,
                       "non_recyclable":  4.1,
                       "capacity":  48.6
                   },
                   {
                       "hour":  "08:00",
                       "organic":  18.2,
                       "recyclable":  10.8,
                       "non_recyclable":  5.9,
                       "capacity":  48.6
                   },
                   {
                       "hour":  "09:00",
                       "organic":  18.2,
                       "recyclable":  10.8,
                       "non_recyclable":  5.9,
                       "capacity":  48.6
                   },
                   {
                       "hour":  "10:00",
                       "organic":  18.2,
                       "recyclable":  10.8,
                       "non_recyclable":  5.9,
                       "capacity":  48.6
                   },
                   {
                       "hour":  "11:00",
                       "organic":  12.6,
                       "recyclable":  7.5,
                       "non_recyclable":  4.1,
                       "capacity":  48.6
                   },
                   {
                       "hour":  "12:00",
                       "organic":  30.0,
                       "recyclable":  17.9,
                       "non_recyclable":  9.8,
                       "capacity":  48.6
                   },
                   {
                       "hour":  "13:00",
                       "organic":  30.0,
                       "recyclable":  17.9,
                       "non_recyclable":  9.8,
                       "capacity":  48.6
                   },
                   {
                       "hour":  "14:00",
                       "organic":  30.0,
                       "recyclable":  17.9,
                       "non_recyclable":  9.8,
                       "capacity":  48.6
                   },
                   {
                       "hour":  "15:00",
                       "organic":  12.6,
                       "recyclable":  7.5,
                       "non_recyclable":  4.1,
                       "capacity":  48.6
                   },
                   {
                       "hour":  "16:00",
                       "organic":  12.6,
                       "recyclable":  7.5,
                       "non_recyclable":  4.1,
                       "capacity":  48.6
                   },
                   {
                       "hour":  "17:00",
                       "organic":  12.6,
                       "recyclable":  7.5,
                       "non_recyclable":  4.1,
                       "capacity":  48.6
                   },
                   {
                       "hour":  "18:00",
                       "organic":  12.6,
                       "recyclable":  7.5,
                       "non_recyclable":  4.1,
                       "capacity":  48.6
                   },
                   {
                       "hour":  "19:00",
                       "organic":  23.7,
                       "recyclable":  14.1,
                       "non_recyclable":  7.7,
                       "capacity":  48.6
                   },
                   {
                       "hour":  "20:00",
                       "organic":  23.7,
                       "recyclable":  14.1,
                       "non_recyclable":  7.7,
                       "capacity":  48.6
                   },
                   {
                       "hour":  "21:00",
                       "organic":  23.7,
                       "recyclable":  14.1,
                       "non_recyclable":  7.7,
                       "capacity":  48.6
                   },
                   {
                       "hour":  "22:00",
                       "organic":  12.6,
                       "recyclable":  7.5,
                       "non_recyclable":  4.1,
                       "capacity":  48.6
                   },
                   {
                       "hour":  "23:00",
                       "organic":  12.6,
                       "recyclable":  7.5,
                       "non_recyclable":  4.1,
                       "capacity":  48.6
                   }
               ],
    "alerts":  [
                   {
                       "id":  "a-peak-lunch",
                       "level":  "warning",
                       "zone":  "MAC Canteen",
                       "message":  "Lunch peak forecast 12:30-14:00 IST: +68% organic load. Pre-position 2 bins.",
                       "ts":  "2026-10-22T17:21:16.993201+00:00"
                   },
                   {
                       "id":  "a-peak-dinner",
                       "level":  "info",
                       "zone":  "Ravindra Bhawan",
                       "message":  "Dinner surge 19:30-21:30 IST expected. Optimized loop auto-scheduled at 21:45.",
                       "ts":  "2026-10-22T17:21:16.993201+00:00"
                   }
               ],
    "zones":  [
                  {
                      "id":  "Z01",
                      "name":  "Thomason Main Bldg",
                      "fill":  37.8,
                      "status":  "ok",
                      "today_kg":  47.7
                  },
                  {
                      "id":  "Z02",
                      "name":  "MG Central Library",
                      "fill":  47.4,
                      "status":  "ok",
                      "today_kg":  27.6
                  },
                  {
                      "id":  "Z03",
                      "name":  "Lecture Hall Complex (LHC)",
                      "fill":  43.4,
                      "status":  "ok",
                      "today_kg":  57.8
                  },
                  {
                      "id":  "Z04",
                      "name":  "Ravindra Bhawan",
                      "fill":  44.7,
                      "status":  "ok",
                      "today_kg":  115.6
                  },
                  {
                      "id":  "Z05",
                      "name":  "Govind Bhawan",
                      "fill":  50.7,
                      "status":  "ok",
                      "today_kg":  110.6
                  },
                  {
                      "id":  "Z06",
                      "name":  "MAC Canteen",
                      "fill":  37.0,
                      "status":  "ok",
                      "today_kg":  150.8
                  },
                  {
                      "id":  "Z07",
                      "name":  "Rajiv Canteen",
                      "fill":  48.6,
                      "status":  "ok",
                      "today_kg":  130.7
                  },
                  {
                      "id":  "Z08",
                      "name":  "IITR Hospital",
                      "fill":  77.3,
                      "status":  "warning",
                      "today_kg":  17.6
                  },
                  {
                      "id":  "Z09",
                      "name":  "LBS Sports Stadium",
                      "fill":  77.5,
                      "status":  "warning",
                      "today_kg":  37.7
                  },
                  {
                      "id":  "Z10",
                      "name":  "Convocation Hall",
                      "fill":  47.2,
                      "status":  "ok",
                      "today_kg":  32.7
                  }
              ]
};

  var SEED_ZONES = {
    "ts":  "2026-10-22T17:21:12.412632+00:00",
    "zones":  [
                  {
                      "id":  "Z01",
                      "name":  "Thomason Main Bldg",
                      "type":  "Academic",
                      "x":  470,
                      "y":  240,
                      "bins":  6,
                      "base_kg":  38,
                      "fill":  37.7,
                      "sensors":  [
                                      {
                                          "id":  "Z01-B01",
                                          "fill":  36.4,
                                          "distance_cm":  76.3,
                                          "battery":  44.4,
                                          "rssi":  -92,
                                          "temp_c":  33.9,
                                          "status":  "ok"
                                      },
                                      {
                                          "id":  "Z01-B02",
                                          "fill":  36.9,
                                          "distance_cm":  75.7,
                                          "battery":  43.9,
                                          "rssi":  -92,
                                          "temp_c":  34.0,
                                          "status":  "ok"
                                      },
                                      {
                                          "id":  "Z01-B03",
                                          "fill":  37.4,
                                          "distance_cm":  75.1,
                                          "battery":  43.3,
                                          "rssi":  -93,
                                          "temp_c":  34.1,
                                          "status":  "ok"
                                      },
                                      {
                                          "id":  "Z01-B04",
                                          "fill":  38.0,
                                          "distance_cm":  74.5,
                                          "battery":  42.8,
                                          "rssi":  -93,
                                          "temp_c":  34.2,
                                          "status":  "ok"
                                      },
                                      {
                                          "id":  "Z01-B05",
                                          "fill":  38.5,
                                          "distance_cm":  73.8,
                                          "battery":  42.2,
                                          "rssi":  -93,
                                          "temp_c":  34.2,
                                          "status":  "ok"
                                      },
                                      {
                                          "id":  "Z01-B06",
                                          "fill":  39.0,
                                          "distance_cm":  73.2,
                                          "battery":  41.7,
                                          "rssi":  -94,
                                          "temp_c":  34.3,
                                          "status":  "ok"
                                      }
                                  ],
                      "status":  "ok",
                      "today_kg":  47.7
                  },
                  {
                      "id":  "Z02",
                      "name":  "MG Central Library",
                      "type":  "Academic",
                      "x":  320,
                      "y":  210,
                      "bins":  4,
                      "base_kg":  22,
                      "fill":  47.2,
                      "sensors":  [
                                      {
                                          "id":  "Z02-B01",
                                          "fill":  46.5,
                                          "distance_cm":  64.2,
                                          "battery":  43.9,
                                          "rssi":  -92,
                                          "temp_c":  34.0,
                                          "status":  "ok"
                                      },
                                      {
                                          "id":  "Z02-B02",
                                          "fill":  47.0,
                                          "distance_cm":  63.6,
                                          "battery":  43.4,
                                          "rssi":  -93,
                                          "temp_c":  34.1,
                                          "status":  "ok"
                                      },
                                      {
                                          "id":  "Z02-B03",
                                          "fill":  47.5,
                                          "distance_cm":  63.0,
                                          "battery":  42.8,
                                          "rssi":  -93,
                                          "temp_c":  34.1,
                                          "status":  "ok"
                                      },
                                      {
                                          "id":  "Z02-B04",
                                          "fill":  48.0,
                                          "distance_cm":  62.4,
                                          "battery":  42.3,
                                          "rssi":  -93,
                                          "temp_c":  34.2,
                                          "status":  "ok"
                                      }
                                  ],
                      "status":  "ok",
                      "today_kg":  27.6
                  },
                  {
                      "id":  "Z03",
                      "name":  "Lecture Hall Complex (LHC)",
                      "type":  "Academic",
                      "x":  650,
                      "y":  160,
                      "bins":  8,
                      "base_kg":  46,
                      "fill":  43.3,
                      "sensors":  [
                                      {
                                          "id":  "Z03-B01",
                                          "fill":  56.6,
                                          "distance_cm":  52.1,
                                          "battery":  43.4,
                                          "rssi":  -93,
                                          "temp_c":  34.1,
                                          "status":  "ok"
                                      },
                                      {
                                          "id":  "Z03-B02",
                                          "fill":  57.1,
                                          "distance_cm":  51.5,
                                          "battery":  42.9,
                                          "rssi":  -93,
                                          "temp_c":  34.1,
                                          "status":  "ok"
                                      },
                                      {
                                          "id":  "Z03-B03",
                                          "fill":  57.6,
                                          "distance_cm":  50.9,
                                          "battery":  42.3,
                                          "rssi":  -93,
                                          "temp_c":  34.2,
                                          "status":  "ok"
                                      },
                                      {
                                          "id":  "Z03-B04",
                                          "fill":  58.1,
                                          "distance_cm":  50.3,
                                          "battery":  41.8,
                                          "rssi":  -94,
                                          "temp_c":  34.3,
                                          "status":  "ok"
                                      },
                                      {
                                          "id":  "Z03-B05",
                                          "fill":  58.6,
                                          "distance_cm":  49.6,
                                          "battery":  41.2,
                                          "rssi":  -94,
                                          "temp_c":  34.4,
                                          "status":  "ok"
                                      },
                                      {
                                          "id":  "Z03-B06",
                                          "fill":  19.3,
                                          "distance_cm":  96.9,
                                          "battery":  95.7,
                                          "rssi":  -61,
                                          "temp_c":  26.5,
                                          "status":  "ok"
                                      },
                                      {
                                          "id":  "Z03-B07",
                                          "fill":  19.6,
                                          "distance_cm":  96.5,
                                          "battery":  95.1,
                                          "rssi":  -62,
                                          "temp_c":  26.5,
                                          "status":  "ok"
                                      },
                                      {
                                          "id":  "Z03-B08",
                                          "fill":  19.8,
                                          "distance_cm":  96.2,
                                          "battery":  94.6,
                                          "rssi":  -62,
                                          "temp_c":  26.6,
                                          "status":  "ok"
                                      }
                                  ],
                      "status":  "ok",
                      "today_kg":  57.8
                  },
                  {
                      "id":  "Z04",
                      "name":  "Ravindra Bhawan",
                      "type":  "Residential",
                      "x":  180,
                      "y":  360,
                      "bins":  10,
                      "base_kg":  92,
                      "fill":  44.7,
                      "sensors":  [
                                      {
                                          "id":  "Z04-B01",
                                          "fill":  66.6,
                                          "distance_cm":  40.0,
                                          "battery":  42.9,
                                          "rssi":  -93,
                                          "temp_c":  34.1,
                                          "status":  "warning"
                                      },
                                      {
                                          "id":  "Z04-B02",
                                          "fill":  67.2,
                                          "distance_cm":  39.4,
                                          "battery":  42.4,
                                          "rssi":  -93,
                                          "temp_c":  34.2,
                                          "status":  "warning"
                                      },
                                      {
                                          "id":  "Z04-B03",
                                          "fill":  67.7,
                                          "distance_cm":  38.8,
                                          "battery":  41.8,
                                          "rssi":  -94,
                                          "temp_c":  34.3,
                                          "status":  "warning"
                                      },
                                      {
                                          "id":  "Z04-B04",
                                          "fill":  68.2,
                                          "distance_cm":  38.2,
                                          "battery":  41.3,
                                          "rssi":  -94,
                                          "temp_c":  34.4,
                                          "status":  "warning"
                                      },
                                      {
                                          "id":  "Z04-B05",
                                          "fill":  28.9,
                                          "distance_cm":  85.4,
                                          "battery":  95.7,
                                          "rssi":  -61,
                                          "temp_c":  26.4,
                                          "status":  "ok"
                                      },
                                      {
                                          "id":  "Z04-B06",
                                          "fill":  29.1,
                                          "distance_cm":  85.0,
                                          "battery":  95.2,
                                          "rssi":  -62,
                                          "temp_c":  26.5,
                                          "status":  "ok"
                                      },
                                      {
                                          "id":  "Z04-B07",
                                          "fill":  29.4,
                                          "distance_cm":  84.7,
                                          "battery":  94.6,
                                          "rssi":  -62,
                                          "temp_c":  26.6,
                                          "status":  "ok"
                                      },
                                      {
                                          "id":  "Z04-B08",
                                          "fill":  29.7,
                                          "distance_cm":  84.4,
                                          "battery":  94.1,
                                          "rssi":  -62,
                                          "temp_c":  26.7,
                                          "status":  "ok"
                                      },
                                      {
                                          "id":  "Z04-B09",
                                          "fill":  30.0,
                                          "distance_cm":  84.0,
                                          "battery":  93.5,
                                          "rssi":  -62,
                                          "temp_c":  26.8,
                                          "status":  "ok"
                                      },
                                      {
                                          "id":  "Z04-B10",
                                          "fill":  30.2,
                                          "distance_cm":  83.7,
                                          "battery":  93.0,
                                          "rssi":  -62,
                                          "temp_c":  26.8,
                                          "status":  "ok"
                                      }
                                  ],
                      "status":  "ok",
                      "today_kg":  115.6
                  },
                  {
                      "id":  "Z05",
                      "name":  "Govind Bhawan",
                      "type":  "Residential",
                      "x":  290,
                      "y":  460,
                      "bins":  10,
                      "base_kg":  88,
                      "fill":  50.6,
                      "sensors":  [
                                      {
                                          "id":  "Z05-B01",
                                          "fill":  76.7,
                                          "distance_cm":  28.0,
                                          "battery":  42.4,
                                          "rssi":  -93,
                                          "temp_c":  34.2,
                                          "status":  "warning"
                                      },
                                      {
                                          "id":  "Z05-B02",
                                          "fill":  77.2,
                                          "distance_cm":  27.3,
                                          "battery":  41.9,
                                          "rssi":  -94,
                                          "temp_c":  34.3,
                                          "status":  "warning"
                                      },
                                      {
                                          "id":  "Z05-B03",
                                          "fill":  77.7,
                                          "distance_cm":  26.7,
                                          "battery":  41.3,
                                          "rssi":  -94,
                                          "temp_c":  34.4,
                                          "status":  "warning"
                                      },
                                      {
                                          "id":  "Z05-B04",
                                          "fill":  38.4,
                                          "distance_cm":  73.9,
                                          "battery":  95.8,
                                          "rssi":  -61,
                                          "temp_c":  26.4,
                                          "status":  "ok"
                                      },
                                      {
                                          "id":  "Z05-B05",
                                          "fill":  38.7,
                                          "distance_cm":  73.6,
                                          "battery":  95.2,
                                          "rssi":  -62,
                                          "temp_c":  26.5,
                                          "status":  "ok"
                                      },
                                      {
                                          "id":  "Z05-B06",
                                          "fill":  39.0,
                                          "distance_cm":  73.2,
                                          "battery":  94.7,
                                          "rssi":  -62,
                                          "temp_c":  26.6,
                                          "status":  "ok"
                                      },
                                      {
                                          "id":  "Z05-B07",
                                          "fill":  39.3,
                                          "distance_cm":  72.9,
                                          "battery":  94.1,
                                          "rssi":  -62,
                                          "temp_c":  26.7,
                                          "status":  "ok"
                                      },
                                      {
                                          "id":  "Z05-B08",
                                          "fill":  39.5,
                                          "distance_cm":  72.6,
                                          "battery":  93.6,
                                          "rssi":  -62,
                                          "temp_c":  26.8,
                                          "status":  "ok"
                                      },
                                      {
                                          "id":  "Z05-B09",
                                          "fill":  39.8,
                                          "distance_cm":  72.2,
                                          "battery":  93.0,
                                          "rssi":  -62,
                                          "temp_c":  26.8,
                                          "status":  "ok"
                                      },
                                      {
                                          "id":  "Z05-B10",
                                          "fill":  40.1,
                                          "distance_cm":  71.9,
                                          "battery":  92.5,
                                          "rssi":  -63,
                                          "temp_c":  26.9,
                                          "status":  "ok"
                                      }
                                  ],
                      "status":  "ok",
                      "today_kg":  110.6
                  },
                  {
                      "id":  "Z06",
                      "name":  "MAC Canteen",
                      "type":  "Food",
                      "x":  490,
                      "y":  390,
                      "bins":  7,
                      "base_kg":  120,
                      "fill":  37.0,
                      "sensors":  [
                                      {
                                          "id":  "Z06-B01",
                                          "fill":  64.2,
                                          "distance_cm":  43.0,
                                          "battery":  41.9,
                                          "rssi":  -94,
                                          "temp_c":  34.3,
                                          "status":  "ok"
                                      },
                                      {
                                          "id":  "Z06-B02",
                                          "fill":  64.7,
                                          "distance_cm":  42.4,
                                          "battery":  41.4,
                                          "rssi":  -94,
                                          "temp_c":  34.4,
                                          "status":  "ok"
                                      },
                                      {
                                          "id":  "Z06-B03",
                                          "fill":  25.4,
                                          "distance_cm":  89.5,
                                          "battery":  95.8,
                                          "rssi":  -61,
                                          "temp_c":  26.4,
                                          "status":  "ok"
                                      },
                                      {
                                          "id":  "Z06-B04",
                                          "fill":  25.7,
                                          "distance_cm":  89.2,
                                          "battery":  95.3,
                                          "rssi":  -61,
                                          "temp_c":  26.5,
                                          "status":  "ok"
                                      },
                                      {
                                          "id":  "Z06-B05",
                                          "fill":  26.0,
                                          "distance_cm":  88.8,
                                          "battery":  94.7,
                                          "rssi":  -62,
                                          "temp_c":  26.6,
                                          "status":  "ok"
                                      },
                                      {
                                          "id":  "Z06-B06",
                                          "fill":  26.2,
                                          "distance_cm":  88.5,
                                          "battery":  94.2,
                                          "rssi":  -62,
                                          "temp_c":  26.7,
                                          "status":  "ok"
                                      },
                                      {
                                          "id":  "Z06-B07",
                                          "fill":  26.5,
                                          "distance_cm":  88.2,
                                          "battery":  93.6,
                                          "rssi":  -62,
                                          "temp_c":  26.8,
                                          "status":  "ok"
                                      }
                                  ],
                      "status":  "ok",
                      "today_kg":  150.8
                  },
                  {
                      "id":  "Z07",
                      "name":  "Rajiv Canteen",
                      "type":  "Food",
                      "x":  680,
                      "y":  350,
                      "bins":  6,
                      "base_kg":  104,
                      "fill":  48.6,
                      "sensors":  [
                                      {
                                          "id":  "Z07-B01",
                                          "fill":  74.2,
                                          "distance_cm":  30.9,
                                          "battery":  41.4,
                                          "rssi":  -94,
                                          "temp_c":  34.3,
                                          "status":  "warning"
                                      },
                                      {
                                          "id":  "Z07-B02",
                                          "fill":  74.8,
                                          "distance_cm":  30.3,
                                          "battery":  40.9,
                                          "rssi":  -94,
                                          "temp_c":  34.4,
                                          "status":  "warning"
                                      },
                                      {
                                          "id":  "Z07-B03",
                                          "fill":  35.3,
                                          "distance_cm":  77.7,
                                          "battery":  95.3,
                                          "rssi":  -61,
                                          "temp_c":  26.5,
                                          "status":  "ok"
                                      },
                                      {
                                          "id":  "Z07-B04",
                                          "fill":  35.5,
                                          "distance_cm":  77.4,
                                          "battery":  94.8,
                                          "rssi":  -62,
                                          "temp_c":  26.6,
                                          "status":  "ok"
                                      },
                                      {
                                          "id":  "Z07-B05",
                                          "fill":  35.8,
                                          "distance_cm":  77.0,
                                          "battery":  94.2,
                                          "rssi":  -62,
                                          "temp_c":  26.7,
                                          "status":  "ok"
                                      },
                                      {
                                          "id":  "Z07-B06",
                                          "fill":  36.1,
                                          "distance_cm":  76.7,
                                          "battery":  93.7,
                                          "rssi":  -62,
                                          "temp_c":  26.7,
                                          "status":  "ok"
                                      }
                                  ],
                      "status":  "ok",
                      "today_kg":  130.7
                  },
                  {
                      "id":  "Z08",
                      "name":  "IITR Hospital",
                      "type":  "Medical",
                      "x":  850,
                      "y":  220,
                      "bins":  3,
                      "base_kg":  14,
                      "fill":  77.4,
                      "sensors":  [
                                      {
                                          "id":  "Z08-B01",
                                          "fill":  97.0,
                                          "distance_cm":  3.6,
                                          "battery":  40.9,
                                          "rssi":  -94,
                                          "temp_c":  34.4,
                                          "status":  "critical"
                                      },
                                      {
                                          "id":  "Z08-B02",
                                          "fill":  67.4,
                                          "distance_cm":  39.1,
                                          "battery":  95.4,
                                          "rssi":  -61,
                                          "temp_c":  26.5,
                                          "status":  "warning"
                                      },
                                      {
                                          "id":  "Z08-B03",
                                          "fill":  67.7,
                                          "distance_cm":  38.8,
                                          "battery":  94.8,
                                          "rssi":  -62,
                                          "temp_c":  26.6,
                                          "status":  "warning"
                                      }
                                  ],
                      "status":  "warning",
                      "today_kg":  17.6
                  },
                  {
                      "id":  "Z09",
                      "name":  "LBS Sports Stadium",
                      "type":  "Recreation",
                      "x":  800,
                      "y":  460,
                      "bins":  5,
                      "base_kg":  30,
                      "fill":  77.5,
                      "sensors":  [
                                      {
                                          "id":  "Z09-B01",
                                          "fill":  76.9,
                                          "distance_cm":  27.7,
                                          "battery":  95.4,
                                          "rssi":  -61,
                                          "temp_c":  26.5,
                                          "status":  "warning"
                                      },
                                      {
                                          "id":  "Z09-B02",
                                          "fill":  77.2,
                                          "distance_cm":  27.3,
                                          "battery":  94.9,
                                          "rssi":  -62,
                                          "temp_c":  26.6,
                                          "status":  "warning"
                                      },
                                      {
                                          "id":  "Z09-B03",
                                          "fill":  77.5,
                                          "distance_cm":  27.0,
                                          "battery":  94.3,
                                          "rssi":  -62,
                                          "temp_c":  26.6,
                                          "status":  "warning"
                                      },
                                      {
                                          "id":  "Z09-B04",
                                          "fill":  77.8,
                                          "distance_cm":  26.7,
                                          "battery":  93.8,
                                          "rssi":  -62,
                                          "temp_c":  26.7,
                                          "status":  "warning"
                                      },
                                      {
                                          "id":  "Z09-B05",
                                          "fill":  78.1,
                                          "distance_cm":  26.3,
                                          "battery":  93.2,
                                          "rssi":  -62,
                                          "temp_c":  26.8,
                                          "status":  "warning"
                                      }
                                  ],
                      "status":  "warning",
                      "today_kg":  37.7
                  },
                  {
                      "id":  "Z10",
                      "name":  "Convocation Hall",
                      "type":  "Events",
                      "x":  770,
                      "y":  150,
                      "bins":  4,
                      "base_kg":  26,
                      "fill":  47.1,
                      "sensors":  [
                                      {
                                          "id":  "Z10-B01",
                                          "fill":  46.4,
                                          "distance_cm":  64.3,
                                          "battery":  44.5,
                                          "rssi":  -92,
                                          "temp_c":  33.9,
                                          "status":  "ok"
                                      },
                                      {
                                          "id":  "Z10-B02",
                                          "fill":  46.9,
                                          "distance_cm":  63.7,
                                          "battery":  43.9,
                                          "rssi":  -92,
                                          "temp_c":  34.0,
                                          "status":  "ok"
                                      },
                                      {
                                          "id":  "Z10-B03",
                                          "fill":  47.4,
                                          "distance_cm":  63.1,
                                          "battery":  43.4,
                                          "rssi":  -93,
                                          "temp_c":  34.1,
                                          "status":  "ok"
                                      },
                                      {
                                          "id":  "Z10-B04",
                                          "fill":  47.9,
                                          "distance_cm":  62.5,
                                          "battery":  42.8,
                                          "rssi":  -93,
                                          "temp_c":  34.1,
                                          "status":  "ok"
                                      }
                                  ],
                      "status":  "ok",
                      "today_kg":  32.7
                  }
              ],
    "routes":  {
                   "depot":  {
                                 "id":  "DEPOT",
                                 "name":  "MRF Waste Depot",
                                 "x":  500,
                                 "y":  550
                             },
                   "scheduled":  {
                                     "path":  [
                                                  {
                                                      "id":  "DEPOT",
                                                      "x":  500,
                                                      "y":  550
                                                  },
                                                  {
                                                      "id":  "Z01",
                                                      "x":  470,
                                                      "y":  240
                                                  },
                                                  {
                                                      "id":  "Z02",
                                                      "x":  320,
                                                      "y":  210
                                                  },
                                                  {
                                                      "id":  "Z03",
                                                      "x":  650,
                                                      "y":  160
                                                  },
                                                  {
                                                      "id":  "Z04",
                                                      "x":  180,
                                                      "y":  360
                                                  },
                                                  {
                                                      "id":  "Z05",
                                                      "x":  290,
                                                      "y":  460
                                                  },
                                                  {
                                                      "id":  "Z06",
                                                      "x":  490,
                                                      "y":  390
                                                  },
                                                  {
                                                      "id":  "Z07",
                                                      "x":  680,
                                                      "y":  350
                                                  },
                                                  {
                                                      "id":  "Z08",
                                                      "x":  850,
                                                      "y":  220
                                                  },
                                                  {
                                                      "id":  "Z09",
                                                      "x":  800,
                                                      "y":  460
                                                  },
                                                  {
                                                      "id":  "Z10",
                                                      "x":  770,
                                                      "y":  150
                                                  },
                                                  {
                                                      "id":  "DEPOT",
                                                      "x":  500,
                                                      "y":  550
                                                  }
                                              ],
                                     "km":  47.49,
                                     "stops":  10,
                                     "km_day":  190.0,
                                     "co2_kg_day":  51.29,
                                     "minutes":  325
                                 },
                   "optimized":  {
                                     "path":  [
                                                  {
                                                      "id":  "DEPOT",
                                                      "x":  500,
                                                      "y":  550
                                                  },
                                                  {
                                                      "id":  "Z09",
                                                      "x":  800,
                                                      "y":  460
                                                  },
                                                  {
                                                      "id":  "Z08",
                                                      "x":  850,
                                                      "y":  220
                                                  },
                                                  {
                                                      "id":  "DEPOT",
                                                      "x":  500,
                                                      "y":  550
                                                  }
                                              ],
                                     "km":  14.15,
                                     "stops":  2,
                                     "km_day":  56.6,
                                     "co2_kg_day":  15.28,
                                     "minutes":  93
                                 },
                   "savings_pct":  70.2
               }
};

  var SEED_WALLET = {
    "credits":  135,
    "rank":  9,
    "tier":  "Seedling",
    "transactions":  [
                         {
                             "id":  "7ebab068-f9a0-42a2-afef-af8fb6ac2346",
                             "user_id":  "c6a35c71-a7cc-4f92-8ab5-2de9856e0148",
                             "amount":  5,
                             "label":  "Sorted: soiled napkin",
                             "kind":  "scan",
                             "created_at":  "2026-10-22T16:24:39.365367+00:00"
                         },
                         {
                             "id":  "33406c45-6709-4f97-8edf-b34ac20b9343",
                             "user_id":  "c6a35c71-a7cc-4f92-8ab5-2de9856e0148",
                             "amount":  -220,
                             "label":  "Redeemed: Combo Thali at Rs 49",
                             "kind":  "redeem",
                             "created_at":  "2026-10-22T16:18:48.407571+00:00"
                         },
                         {
                             "id":  "719ba9c3-3d8f-4431-8688-96e0f4ff21ba",
                             "user_id":  "c6a35c71-a7cc-4f92-8ab5-2de9856e0148",
                             "amount":  -90,
                             "label":  "Redeemed: Cold Coffee",
                             "kind":  "redeem",
                             "created_at":  "2026-10-22T16:18:42.761071+00:00"
                         },
                         {
                             "id":  "310acecf-b0a6-424e-89e3-2f428b99e0c3",
                             "user_id":  "c6a35c71-a7cc-4f92-8ab5-2de9856e0148",
                             "amount":  10,
                             "label":  "Sorted: plastic mug",
                             "kind":  "scan",
                             "created_at":  "2026-10-22T11:02:14.995815+00:00"
                         },
                         {
                             "id":  "d14282cb-d416-4473-bc36-df0628816a39",
                             "user_id":  "c6a35c71-a7cc-4f92-8ab5-2de9856e0148",
                             "amount":  5,
                             "label":  "Sorted: snack wrapper",
                             "kind":  "scan",
                             "created_at":  "2026-10-22T11:00:34.829905+00:00"
                         },
                         {
                             "id":  "906b54ef-8449-4edb-a7ab-8c89c5ec35de",
                             "user_id":  "c6a35c71-a7cc-4f92-8ab5-2de9856e0148",
                             "amount":  10,
                             "label":  "Sorted: spiral notebook",
                             "kind":  "scan",
                             "created_at":  "2026-10-22T10:59:53.243519+00:00"
                         },
                         {
                             "id":  "0ca0a0f4-5c39-4a46-abe6-b4b8dbd738f0",
                             "user_id":  "c6a35c71-a7cc-4f92-8ab5-2de9856e0148",
                             "amount":  10,
                             "label":  "Sorted: non-woven bag",
                             "kind":  "scan",
                             "created_at":  "2026-10-22T10:59:22.737747+00:00"
                         },
                         {
                             "id":  "707b9a12-fe5f-48c4-8f6c-99f60cafb5f0",
                             "user_id":  "c6a35c71-a7cc-4f92-8ab5-2de9856e0148",
                             "amount":  10,
                             "label":  "Sorted: metal water bottle",
                             "kind":  "scan",
                             "created_at":  "2026-10-22T10:58:49.510647+00:00"
                         },
                         {
                             "id":  "e51512e0-640d-4d09-b07a-c1de5d190a6e",
                             "user_id":  "c6a35c71-a7cc-4f92-8ab5-2de9856e0148",
                             "amount":  15,
                             "label":  "Reported overflow: LBS Sports Stadium",
                             "kind":  "report",
                             "created_at":  "2026-10-22T10:53:52.306136+00:00"
                         },
                         {
                             "id":  "4dd549ef-0802-4ad9-bca6-49fea4937d9d",
                             "user_id":  "c6a35c71-a7cc-4f92-8ab5-2de9856e0148",
                             "amount":  5,
                             "label":  "Sorted: greasy pizza box",
                             "kind":  "scan",
                             "created_at":  "2026-10-22T10:51:54.654329+00:00"
                         },
                         {
                             "id":  "e7b8073e-b19e-4dcc-b995-b55043816c23",
                             "user_id":  "c6a35c71-a7cc-4f92-8ab5-2de9856e0148",
                             "amount":  15,
                             "label":  "Reported overflow: Ravindra Bhawan",
                             "kind":  "report",
                             "created_at":  "2026-10-22T10:48:12.638450+00:00"
                         },
                         {
                             "id":  "5c08d1f6-bf73-4b89-b154-6b106e520b5c",
                             "user_id":  "c6a35c71-a7cc-4f92-8ab5-2de9856e0148",
                             "amount":  10,
                             "label":  "Sorted: plastic bottle",
                             "kind":  "scan",
                             "created_at":  "2026-10-22T10:48:05.945606+00:00"
                         },
                         {
                             "id":  "8a9caac3-7f7b-4715-8578-e75648584d4c",
                             "user_id":  "c6a35c71-a7cc-4f92-8ab5-2de9856e0148",
                             "amount":  10,
                             "label":  "Sorted: water carton",
                             "kind":  "scan",
                             "created_at":  "2026-10-22T10:42:22.019125+00:00"
                         },
                         {
                             "id":  "05fb925b-db4a-47e7-a9b6-91903e4b317a",
                             "user_id":  "c6a35c71-a7cc-4f92-8ab5-2de9856e0148",
                             "amount":  10,
                             "label":  "Sorted: Banana peel",
                             "kind":  "scan",
                             "created_at":  "2026-10-22T10:33:39.665148+00:00"
                         },
                         {
                             "id":  "fd514788-a8b1-4c58-9d53-037d87d6c2e8",
                             "user_id":  "c6a35c71-a7cc-4f92-8ab5-2de9856e0148",
                             "amount":  15,
                             "label":  "Reported overflow: Rajiv Canteen",
                             "kind":  "report",
                             "created_at":  "2026-10-22T10:33:39.663881+00:00"
                         },
                         {
                             "id":  "daede819-6c40-45d0-84c0-c37bf24d2c01",
                             "user_id":  "c6a35c71-a7cc-4f92-8ab5-2de9856e0148",
                             "amount":  10,
                             "label":  "Sorted: PET bottle",
                             "kind":  "scan",
                             "created_at":  "2026-10-22T10:33:39.662253+00:00"
                         },
                         {
                             "id":  "db5fe4f9-c106-4069-836d-153a3f6924e6",
                             "user_id":  "c6a35c71-a7cc-4f92-8ab5-2de9856e0148",
                             "amount":  50,
                             "label":  "Welcome bonus",
                             "kind":  "bonus",
                             "created_at":  "2026-10-22T10:33:39.626981+00:00"
                         }
                     ],
    "coupons":  [
                    {
                        "id":  "c6521379-9523-4ca0-b850-916bb690d3e7",
                        "user_id":  "c6a35c71-a7cc-4f92-8ab5-2de9856e0148",
                        "reward_id":  "r3",
                        "title":  "Combo Thali at Rs 49",
                        "venue":  "MAC Canteen",
                        "code":  "CL-8B9185",
                        "created_at":  "2026-10-22T16:18:48.406192+00:00"
                    },
                    {
                        "id":  "7b7bba12-03f4-4f65-8750-c3614db49aa1",
                        "user_id":  "c6a35c71-a7cc-4f92-8ab5-2de9856e0148",
                        "reward_id":  "r6",
                        "title":  "Cold Coffee",
                        "venue":  "Rajiv Canteen",
                        "code":  "CL-84D58D",
                        "created_at":  "2026-10-22T16:18:42.479770+00:00"
                    }
                ],
    "rewards":  [
                    {
                        "id":  "r1",
                        "title":  "Free Masala Chai",
                        "venue":  "MAC Canteen",
                        "cost":  60,
                        "tag":  "Beverage"
                    },
                    {
                        "id":  "r2",
                        "title":  "10% off any meal",
                        "venue":  "Rajiv Canteen",
                        "cost":  120,
                        "tag":  "Meal"
                    },
                    {
                        "id":  "r3",
                        "title":  "Combo Thali at Rs 49",
                        "venue":  "MAC Canteen",
                        "cost":  220,
                        "tag":  "Meal"
                    },
                    {
                        "id":  "r4",
                        "title":  "Reusable Steel Bottle",
                        "venue":  "Eco Store",
                        "cost":  400,
                        "tag":  "Merch"
                    },
                    {
                        "id":  "r5",
                        "title":  "Priority Laundry Slot",
                        "venue":  "Ravindra Bhawan",
                        "cost":  150,
                        "tag":  "Service"
                    },
                    {
                        "id":  "r6",
                        "title":  "Cold Coffee",
                        "venue":  "Rajiv Canteen",
                        "cost":  90,
                        "tag":  "Beverage"
                    }
                ]
};

  var SEED_LEADERBOARD = [
    {
        "id":  "c17dc96d-15dd-415f-9941-29abf32411bc",
        "name":  "Aarav Mehta",
        "credits":  1240,
        "hostel":  "Ravindra Bhawan"
    },
    {
        "id":  "c39f52a5-5ed4-405d-a35d-4c11e3346268",
        "name":  "Ishita Rao",
        "credits":  1105,
        "hostel":  "Govind Bhawan"
    },
    {
        "id":  "c657d83b-c496-427d-8b23-544e3c998c51",
        "name":  "Kabir Singh",
        "credits":  980,
        "hostel":  "Ravindra Bhawan"
    },
    {
        "id":  "09b63d14-4b8c-4c51-9a21-2aa9b97e3a01",
        "name":  "Ananya Iyer",
        "credits":  865,
        "hostel":  "Govind Bhawan"
    },
    {
        "id":  "705ef5b9-a26b-4ae7-9e9e-b9a7edd3a1c3",
        "name":  "Rohan Gupta",
        "credits":  720,
        "hostel":  "Ravindra Bhawan"
    },
    {
        "id":  "dc7e7c7e-f69b-40d4-aeb7-ce433a1d7043",
        "name":  "Meera Nair",
        "credits":  640,
        "hostel":  "Govind Bhawan"
    },
    {
        "id":  "621541ca-32fc-4064-9422-cdd58260b8ee",
        "name":  "Vihaan Joshi",
        "credits":  515,
        "hostel":  "Ravindra Bhawan"
    },
    {
        "id":  "c24b0548-3105-44c9-b132-83e4f81038be",
        "name":  "Saanvi Das",
        "credits":  430,
        "hostel":  "Govind Bhawan"
    },
    {
        "id":  "c6a35c71-a7cc-4f92-8ab5-2de9856e0148",
        "name":  "Demo Student",
        "credits":  135,
        "hostel":  "Govind Bhawan"
    }
];

  var SEED_BATCHES = [
    {
        "id": "batch-organic-compost-01",
        "code": "CL-2609",
        "material": "Mess Food Waste (To Compost)",
        "weight_kg": 340,
        "source_zone": "Ravindra Bhawan",
        "price_per_kg": 5,
        "stage": "sold",
        "purity": 96.5,
        "buyer": "Campus Aerobic Composting Facility",
        "revenue": 1700,
        "created_at": "2026-10-22T10:33:43.780689+00:00",
        "history": [
            { "stage": "collected", "ts": "2026-10-21T10:33:43.780689+00:00" },
            { "stage": "tested", "ts": "2026-10-22T08:00:00.000000+00:00" },
            { "stage": "sold", "ts": "2026-10-22T12:00:00.000000+00:00" }
        ],
        "trend": [4.5, 5.0, 5.2, 5.0, 4.8, 5.1, 5.0]
    },
    {
        "id":  "f0005cb6-9b3f-4195-840f-9e3c0b1c7b3e",
        "code":  "CL-2608",
        "material":  "Tetra Packs",
        "weight_kg":  95,
        "source_zone":  "MAC Canteen",
        "price_per_kg":  7,
        "stage":  "tested",
        "purity":  91.3,
        "buyer":  null,
        "revenue":  0,
        "created_at":  "2026-10-21T10:33:43.780689+00:00",
        "history":  [
                        {
                            "stage":  "collected",
                            "ts":  "2026-10-21T10:33:43.780689+00:00"
                        },
                        {
                            "stage":  "tested",
                            "ts":  "2026-10-22T10:33:43.780689+00:00"
                        }
                    ],
        "trend":  [
                      6.7,
                      7.3,
                      6.4,
                      7.0,
                      6.2,
                      6.7,
                      7.3
                  ]
    },
    {
        "id":  "855d4f36-c767-4915-bb6f-ed8cee514b02",
        "code":  "CL-2607",
        "material":  "Glass Bottles",
        "weight_kg":  210,
        "source_zone":  "Govind Bhawan",
        "price_per_kg":  4,
        "stage":  "sold",
        "purity":  86.7,
        "buyer":  "Saharanpur Paper Mills",
        "revenue":  840,
        "created_at":  "2026-10-20T10:33:43.779583+00:00",
        "history":  [
                        {
                            "stage":  "collected",
                            "ts":  "2026-10-20T10:33:43.779583+00:00"
                        },
                        {
                            "stage":  "tested",
                            "ts":  "2026-10-21T10:33:43.779583+00:00"
                        },
                        {
                            "stage":  "sold",
                            "ts":  "2026-10-22T10:33:43.779583+00:00"
                        }
                    ],
        "trend":  [
                      3.7,
                      4.0,
                      3.5,
                      3.8,
                      4.2,
                      3.7,
                      4.0
                  ]
    },
    {
        "id":  "64f24e1a-2bc4-4ba3-a80b-f0e570d019fa",
        "code":  "CL-2606",
        "material":  "E-waste (cables)",
        "weight_kg":  36,
        "source_zone":  "Lecture Hall Complex (LHC)",
        "price_per_kg":  140,
        "stage":  "sold",
        "purity":  93.9,
        "buyer":  "Doon PolyLoop Pvt Ltd",
        "revenue":  5040,
        "created_at":  "2026-10-19T10:33:43.778427+00:00",
        "history":  [
                        {
                            "stage":  "collected",
                            "ts":  "2026-10-19T10:33:43.778427+00:00"
                        },
                        {
                            "stage":  "tested",
                            "ts":  "2026-10-20T10:33:43.778427+00:00"
                        },
                        {
                            "stage":  "sold",
                            "ts":  "2026-10-21T10:33:43.778427+00:00"
                        }
                    ],
        "trend":  [
                      123.2,
                      134.4,
                      145.6,
                      128.8,
                      140.0,
                      123.2,
                      134.4
                  ]
    },
    {
        "id":  "2e5dd98b-6c89-42f5-889c-b397dac57307",
        "code":  "CL-2605",
        "material":  "HDPE Containers",
        "weight_kg":  128,
        "source_zone":  "Ravindra Bhawan",
        "price_per_kg":  28,
        "stage":  "collected",
        "purity":  null,
        "buyer":  null,
        "revenue":  0,
        "created_at":  "2026-10-18T10:33:43.777330+00:00",
        "history":  [
                        {
                            "stage":  "collected",
                            "ts":  "2026-10-18T10:33:43.777330+00:00"
                        }
                    ],
        "trend":  [
                      29.1,
                      25.8,
                      28.0,
                      24.6,
                      26.9,
                      29.1,
                      25.8
                  ]
    },
    {
        "id":  "976c4762-eb87-4552-9263-de45f2d4b365",
        "code":  "CL-2604",
        "material":  "Mixed Paper",
        "weight_kg":  410,
        "source_zone":  "MG Central Library",
        "price_per_kg":  11,
        "stage":  "tested",
        "purity":  86.4,
        "buyer":  null,
        "revenue":  0,
        "created_at":  "2026-10-17T10:33:43.776042+00:00",
        "history":  [
                        {
                            "stage":  "collected",
                            "ts":  "2026-10-17T10:33:43.776042+00:00"
                        },
                        {
                            "stage":  "tested",
                            "ts":  "2026-10-18T10:33:43.776042+00:00"
                        }
                    ],
        "trend":  [
                      11.0,
                      9.7,
                      10.6,
                      11.4,
                      10.1,
                      11.0,
                      9.7
                  ]
    },
    {
        "id":  "ca69af8f-4604-40fa-b914-5b4ba2c8fcfa",
        "code":  "CL-2603",
        "material":  "Aluminium Cans",
        "weight_kg":  64,
        "source_zone":  "LBS Sports Stadium",
        "price_per_kg":  95,
        "stage":  "tested",
        "purity":  91.0,
        "buyer":  null,
        "revenue":  0,
        "created_at":  "2026-10-16T10:33:43.774556+00:00",
        "history":  [
                        {
                            "stage":  "collected",
                            "ts":  "2026-10-16T10:33:43.774556+00:00"
                        },
                        {
                            "stage":  "tested",
                            "ts":  "2026-10-17T10:33:43.774556+00:00"
                        }
                    ],
        "trend":  [
                      91.2,
                      98.8,
                      87.4,
                      95.0,
                      83.6,
                      91.2,
                      98.8
                  ]
    },
    {
        "id":  "78962443-5a60-4d14-b40b-e83733a3f5d5",
        "code":  "CL-2602",
        "material":  "Cardboard",
        "weight_kg":  340,
        "source_zone":  "MAC Canteen",
        "price_per_kg":  9,
        "stage":  "collected",
        "purity":  null,
        "buyer":  null,
        "revenue":  0,
        "created_at":  "2026-10-15T10:33:43.772598+00:00",
        "history":  [
                        {
                            "stage":  "collected",
                            "ts":  "2026-10-15T10:33:43.772598+00:00"
                        }
                    ],
        "trend":  [
                      8.3,
                      9.0,
                      7.9,
                      8.6,
                      9.4,
                      8.3,
                      9.0
                  ]
    },
    {
        "id":  "82ff8b4e-33dd-4414-bb9a-a5dfd50898a5",
        "code":  "CL-2601",
        "material":  "PET Bottles",
        "weight_kg":  182,
        "source_zone":  "Rajiv Canteen",
        "price_per_kg":  22,
        "stage":  "collected",
        "purity":  null,
        "buyer":  null,
        "revenue":  0,
        "created_at":  "2026-10-14T10:33:43.748662+00:00",
        "history":  [
                        {
                            "stage":  "collected",
                            "ts":  "2026-10-14T10:33:43.748662+00:00"
                        }
                    ],
        "trend":  [
                      19.4,
                      21.1,
                      22.9,
                      20.2,
                      22.0,
                      19.4,
                      21.1
                  ]
    }
];

  var SEED_REPORTS = [
    {
        "id":  "9db004be-c974-4342-828b-f1add8acce5a",
        "user_id":  "c6a35c71-a7cc-4f92-8ab5-2de9856e0148",
        "user_name":  "Demo Student",
        "zone_id":  "Z06",
        "zone":  "MAC Canteen",
        "note":  "Overflow reported from digital twin",
        "fill_at_report":  72.8,
        "status":  "pending",
        "reward":  15,
        "created_at":  "2026-10-22T11:04:12.331371+00:00"
    },
    {
        "id":  "1fc29562-5873-42bd-9c6b-40c7b33f33dc",
        "user_id":  "c6a35c71-a7cc-4f92-8ab5-2de9856e0148",
        "zone_id":  "Z09",
        "zone":  "LBS Sports Stadium",
        "note":  "",
        "created_at":  "2026-10-22T10:53:52.295726+00:00",
        "reward":  15,
        "status":  "approved"
    },
    {
        "id":  "2b787e35-7bda-4db9-a680-c85bd3698d63",
        "user_id":  "c6a35c71-a7cc-4f92-8ab5-2de9856e0148",
        "zone_id":  "Z04",
        "zone":  "Ravindra Bhawan",
        "note":  "Overflow reported from digital twin",
        "created_at":  "2026-10-22T10:48:12.633628+00:00",
        "reward":  15,
        "status":  "approved"
    }
];

  var SEED_SCANS = [
    {
        "id":  "d6e5fcf4-214e-48eb-af13-c4fc1b25cdeb",
        "user_id":  "c6a35c71-a7cc-4f92-8ab5-2de9856e0148",
        "item":  "handkerchief",
        "category":  "non_recyclable",
        "final_category":  "non_recyclable",
        "confidence":  0.95,
        "contaminated":  false,
        "guardrail":  false,
        "material":  "cotton fabric",
        "reason":  "The item is a personal belonging (handkerchief) and a person is present in the image.",
        "bin_en":  "Personal item, not for waste bins",
        "bin_hi":  "à¤µà¥à¤¯à¤à¥à¤¤à¤¿à¤à¤¤ à¤µà¤¸à¥à¤¤à¥, à¤à¤à¤°à¥ à¤à¥ à¤¡à¤¿à¤¬à¥à¤¬à¥ à¤à¥ à¤²à¤¿à¤ à¤¨à¤¹à¥à¤ à¤¹à¥",
        "guard_en":  null,
        "guard_hi":  null,
        "blocked":  "not_waste",
        "credit_note":  "This item doesn\u0027t look like it is being thrown away. Credits are only for real disposals.",
        "credits":  0,
        "created_at":  "2026-10-22T16:25:22.351297+00:00"
    },
    {
        "id":  "22765619-cdbf-4fa6-87e3-15f803591b12",
        "user_id":  "c6a35c71-a7cc-4f92-8ab5-2de9856e0148",
        "item":  "soiled napkin",
        "category":  "organic",
        "final_category":  "organic",
        "confidence":  0.95,
        "contaminated":  true,
        "guardrail":  true,
        "material":  "paper",
        "reason":  "Food-soiled tissue paper or napkins are organic waste and can be composted, but cannot be recycled.",
        "bin_en":  "Dispose in the green organic bin",
        "bin_hi":  "à¤¹à¤°à¥ à¤à¥à¤µà¤¿à¤ à¤à¥à¤¡à¤¼à¥à¤¦à¤¾à¤¨ à¤®à¥à¤ à¤¡à¤¾à¤²à¥à¤",
        "guard_en":  "Contaminated item detected. Keep it out of the recycling stream and use the red Non-Recyclable bin.",
        "guard_hi":  "à¤à¤à¤¦à¥ à¤µà¤¸à¥à¤¤à¥ à¤®à¤¿à¤²à¥à¥¤ à¤à¤¸à¥ à¤°à¥à¤¸à¤¾à¤¯à¤à¤² à¤®à¥à¤ à¤¨ à¤¡à¤¾à¤²à¥à¤, à¤²à¤¾à¤² à¤¨à¥à¤¨-à¤°à¥à¤¸à¤¾à¤¯à¤à¤² à¤¡à¤¿à¤¬à¥à¤¬à¥ à¤à¤¾ à¤à¤ªà¤¯à¥à¤ à¤à¤°à¥à¤à¥¤",
        "blocked":  null,
        "credit_note":  null,
        "credits":  5,
        "created_at":  "2026-10-22T16:24:39.275408+00:00"
    },
    {
        "id":  "813c70b3-7bce-410e-b1b1-84b022fb4be1",
        "user_id":  "c6a35c71-a7cc-4f92-8ab5-2de9856e0148",
        "item":  "plastic mug",
        "category":  "recyclable",
        "final_category":  "recyclable",
        "confidence":  0.95,
        "contaminated":  false,
        "guardrail":  false,
        "material":  "rigid plastic",
        "reason":  "Clean, rigid plastic household items are suitable for recycling.",
        "bin_en":  "Blue Bin for dry recyclables",
        "bin_hi":  "à¤¸à¥à¤à¥ à¤ªà¥à¤¨à¤°à¥à¤à¤à¥à¤°à¤£ à¤¯à¥à¤à¥à¤¯ à¤à¤à¤°à¥ à¤à¥ à¤²à¤¿à¤ à¤¨à¥à¤²à¤¾ à¤à¥à¤¡à¤¼à¥à¤¦à¤¾à¤¨",
        "guard_en":  null,
        "guard_hi":  null,
        "credits":  10,
        "created_at":  "2026-10-22T11:02:14.992830+00:00"
    },
    {
        "id":  "3ebed6b7-6ee9-4675-a774-ff3708913a56",
        "user_id":  "c6a35c71-a7cc-4f92-8ab5-2de9856e0148",
        "item":  "snack wrapper",
        "category":  "non_recyclable",
        "final_category":  "non_recyclable",
        "confidence":  0.95,
        "contaminated":  true,
        "guardrail":  true,
        "material":  "multi-layer plastic",
        "reason":  "Multi-layer plastics are composite materials that are difficult to recycle and usually contain food residue.",
        "bin_en":  "Dispose in the Red bin for non-recyclable waste.",
        "bin_hi":  "à¤à¥à¤°-à¤ªà¥à¤¨à¤°à¥à¤à¤à¥à¤°à¤£ à¤¯à¥à¤à¥à¤¯ à¤à¤à¤°à¥ à¤à¥ à¤²à¤¿à¤ à¤²à¤¾à¤² à¤à¥à¤¡à¤¼à¥à¤¦à¤¾à¤¨ à¤®à¥à¤ à¤¡à¤¾à¤²à¥à¤à¥¤",
        "guard_en":  "Contaminated item detected. Keep it out of the recycling stream and use the red Non-Recyclable bin.",
        "guard_hi":  "à¤à¤à¤¦à¥ à¤µà¤¸à¥à¤¤à¥ à¤®à¤¿à¤²à¥à¥¤ à¤à¤¸à¥ à¤°à¥à¤¸à¤¾à¤¯à¤à¤² à¤®à¥à¤ à¤¨ à¤¡à¤¾à¤²à¥à¤, à¤²à¤¾à¤² à¤¨à¥à¤¨-à¤°à¥à¤¸à¤¾à¤¯à¤à¤² à¤¡à¤¿à¤¬à¥à¤¬à¥ à¤à¤¾ à¤à¤ªà¤¯à¥à¤ à¤à¤°à¥à¤à¥¤",
        "credits":  5,
        "created_at":  "2026-10-22T11:00:34.756796+00:00"
    },
    {
        "id":  "f76173aa-5eb0-4731-b93c-e6adc560a9fe",
        "user_id":  "c6a35c71-a7cc-4f92-8ab5-2de9856e0148",
        "item":  "spiral notebook",
        "category":  "recyclable",
        "final_category":  "recyclable",
        "confidence":  0.98,
        "contaminated":  false,
        "guardrail":  false,
        "material":  "paper, metal spiral",
        "reason":  "Clean paper notebooks are highly recyclable, ideally with the spiral removed.",
        "bin_en":  "Blue bin for dry recyclables",
        "bin_hi":  "à¤¸à¥à¤à¥ à¤ªà¥à¤¨à¤°à¥à¤à¤à¥à¤°à¤£ à¤¯à¥à¤à¥à¤¯ à¤à¤à¤°à¥ à¤à¥ à¤²à¤¿à¤ à¤¨à¥à¤²à¤¾ à¤à¥à¤¡à¤¼à¥à¤¦à¤¾à¤¨",
        "guard_en":  null,
        "guard_hi":  null,
        "credits":  10,
        "created_at":  "2026-10-22T10:59:53.238176+00:00"
    },
    {
        "id":  "fd6ae5e5-4b90-4019-8aba-13600f8fe340",
        "user_id":  "c6a35c71-a7cc-4f92-8ab5-2de9856e0148",
        "item":  "non-woven bag",
        "category":  "recyclable",
        "final_category":  "recyclable",
        "confidence":  0.9,
        "contaminated":  false,
        "guardrail":  false,
        "material":  "non-woven polypropylene",
        "reason":  "The item is a clean, dry synthetic fabric bag that can be processed as dry recyclable waste.",
        "bin_en":  "Blue Bin (Dry Waste)",
        "bin_hi":  "à¤¨à¥à¤²à¤¾ à¤à¥à¤¡à¤¼à¥à¤¦à¤¾à¤¨ (à¤¸à¥à¤à¤¾ à¤à¤à¤°à¤¾)",
        "guard_en":  null,
        "guard_hi":  null,
        "credits":  10,
        "created_at":  "2026-10-22T10:59:22.733438+00:00"
    },
    {
        "id":  "0b3ccb79-97fa-40a8-ad03-81bf17745f99",
        "user_id":  "c6a35c71-a7cc-4f92-8ab5-2de9856e0148",
        "item":  "metal water bottle",
        "category":  "recyclable",
        "final_category":  "recyclable",
        "confidence":  0.95,
        "contaminated":  false,
        "guardrail":  false,
        "material":  "stainless steel",
        "reason":  "Metal bottles are recyclable and can be processed for scrap material.",
        "bin_en":  "Use the blue bin for recyclables.",
        "bin_hi":  "à¤¨à¥à¤²à¥ à¤°à¥à¤¸à¤¾à¤à¤à¥à¤²à¤¿à¤à¤ à¤à¥à¤¡à¤¼à¥à¤¦à¤¾à¤¨ à¤à¤¾ à¤à¤ªà¤¯à¥à¤ à¤à¤°à¥à¤à¥¤",
        "guard_en":  null,
        "guard_hi":  null,
        "credits":  10,
        "created_at":  "2026-10-22T10:58:49.503070+00:00"
    },
    {
        "id":  "fa1c3697-ab0a-4cdd-81ee-3e8ca034edb2",
        "user_id":  "c6a35c71-a7cc-4f92-8ab5-2de9856e0148",
        "item":  "greasy pizza box",
        "category":  "non_recyclable",
        "final_category":  "non_recyclable",
        "confidence":  0.98,
        "contaminated":  true,
        "guardrail":  true,
        "material":  "cardboard",
        "reason":  "Oil and food stains contaminate paper fibers, making it unsuitable for recycling.",
        "bin_en":  "Dispose in the black bin for non-recyclable waste.",
        "bin_hi":  "à¤à¥à¤°-à¤ªà¥à¤¨à¤°à¥à¤à¤à¥à¤°à¤£ à¤¯à¥à¤à¥à¤¯ à¤à¤à¤°à¥ à¤à¥ à¤²à¤¿à¤ à¤à¤¸à¥ à¤à¤¾à¤²à¥ à¤à¥à¤¡à¤¼à¥à¤¦à¤¾à¤¨ à¤®à¥à¤ à¤¡à¤¾à¤²à¥à¤à¥¤",
        "guard_en":  null,
        "guard_hi":  null,
        "credits":  5,
        "created_at":  "2026-10-22T10:51:54.613814+00:00"
    },
    {
        "id":  "2f450e10-d627-4b09-a370-675896cbf63c",
        "user_id":  "c6a35c71-a7cc-4f92-8ab5-2de9856e0148",
        "item":  "plastic bottle",
        "category":  "recyclable",
        "final_category":  "recyclable",
        "confidence":  0.99,
        "contaminated":  false,
        "guardrail":  false,
        "material":  "PET plastic",
        "reason":  "Clean PET bottles are standard recyclable items.",
        "bin_en":  "Blue bin; empty and crush before disposal",
        "bin_hi":  "à¤¨à¥à¤²à¤¾ à¤à¥à¤¡à¤¼à¥à¤¦à¤¾à¤¨; à¤à¤¾à¤²à¥ à¤à¤°à¥à¤ à¤à¤° à¤®à¤°à¥à¤¡à¤¼à¥à¤",
        "guard_en":  null,
        "guard_hi":  null,
        "credits":  10,
        "created_at":  "2026-10-22T10:48:05.940558+00:00"
    },
    {
        "id":  "537c68ae-bde1-491d-9026-0275a3343556",
        "user_id":  "c6a35c71-a7cc-4f92-8ab5-2de9856e0148",
        "item":  "water carton",
        "category":  "recyclable",
        "final_category":  "recyclable",
        "confidence":  0.85,
        "contaminated":  false,
        "guardrail":  false,
        "material":  "tetra pak",
        "reason":  "Clean, empty water cartons are recyclable dry waste.",
        "bin_en":  "Blue Bin (Dry Recyclables)",
        "bin_hi":  "à¤¨à¥à¤²à¤¾ à¤¡à¤¿à¤¬à¥à¤¬à¤¾ (à¤¸à¥à¤à¤¾ à¤à¤à¤°à¤¾)",
        "guard_en":  null,
        "guard_hi":  null,
        "credits":  10,
        "created_at":  "2026-10-22T10:42:21.963013+00:00"
    }
];

  function getStore(k, fallback) {
    try {
      var v = localStorage.getItem("cl_db_" + k);
      return v ? JSON.parse(v) : fallback;
    } catch(e) { return fallback; }
  }

  function setStore(k, val) {
    try {
      localStorage.setItem("cl_db_" + k, JSON.stringify(val));
    } catch(e) {}
  }

  // Automatic migration to v2 authentic IIT Roorkee data
  try {
    if (!localStorage.getItem("cl_db_version_iitr_v3")) {
      localStorage.setItem("cl_db_version_iitr_v3", "3.0");
      localStorage.removeItem("cl_db_zones");
      localStorage.removeItem("cl_db_overview");
      localStorage.removeItem("cl_db_batches");
      localStorage.removeItem("cl_db_reports");
      localStorage.removeItem("cl_db_leaderboard");
    }
  } catch(e) {}

  // Automatic migration to v2 authentic IIT Roorkee data
  try {
    if (!localStorage.getItem("cl_db_version_iitr_v3")) {
      localStorage.setItem("cl_db_version_iitr_v3", "3.0");
      localStorage.removeItem("cl_db_zones");
      localStorage.removeItem("cl_db_overview");
      localStorage.removeItem("cl_db_batches");
      localStorage.removeItem("cl_db_reports");
      localStorage.removeItem("cl_db_leaderboard");
    }
  } catch(e) {}

  var db = {
    overview: getStore("overview", SEED_OVERVIEW),
    zones: getStore("zones", SEED_ZONES),
    wallet: getStore("wallet", SEED_WALLET),
    leaderboard: getStore("leaderboard", SEED_LEADERBOARD),
    batches: getStore("batches", SEED_BATCHES),
    reports: getStore("reports", SEED_REPORTS),
    scans: getStore("scans", SEED_SCANS),
    user: getStore("user", {
      id: "c6a35c71-a7cc-4f92-8ab5-2de9856e0148",
      email: "demo.student@campusloop.in",
      name: "Demo Student",
      role: "student",
      credits: SEED_WALLET.credits || 135,
      hostel: "Govind Bhawan",
      created_at: new Date().toISOString()
    })
  };

  // Self-heal and sanitize scans to prevent React unmount crashes
  if (Array.isArray(db.scans)) {
    var modified = false;
    db.scans.forEach(function(s) {
      if (!s.final_category) { s.final_category = s.category || "non_recyclable"; modified = true; }
      if (!s.category) { s.category = s.final_category || "non_recyclable"; modified = true; }
      if (["organic", "recyclable", "non_recyclable"].indexOf(s.final_category) === -1) {
        s.final_category = "non_recyclable";
        modified = true;
      }
    });
    if (modified) setStore("scans", db.scans);
  }

  // -------------------------------------------------------------
  // Gemini Live Vision Integration
  // -------------------------------------------------------------
  var discoveredModel = null;

  function getGeminiKeys() {
    var raw = localStorage.getItem("cl_gemini_api_key") || window.GEMINI_API_KEY || "";
    return raw.split(/[\n,;]+/).map(function(k) { return k.trim(); }).filter(Boolean);
  }

  function getGeminiKey() {
    var keys = getGeminiKeys();
    return keys.length > 0 ? keys[0] : "";
  }

  function setGeminiKey(key) {
    localStorage.setItem("cl_gemini_api_key", (key || "").trim());
    discoveredModel = null;
    updateBadge();
  }

  function renderModal() {
    if (document.getElementById("cl-gemini-modal")) return;

    var overlay = document.createElement("div");
    overlay.id = "cl-gemini-modal";
    overlay.style.cssText = "position:fixed;inset:0;background:rgba(9,10,12,0.85);backdrop-filter:blur(6px);z-index:999999;display:none;align-items:center;justify-content:center;padding:16px;font-family:'Manrope',sans-serif;";

    var box = document.createElement("div");
    box.style.cssText = "background:#121418;border:1px solid #22262B;max-width:520px;width:100%;padding:28px;box-shadow:0 20px 40px rgba(0,0,0,0.8);position:relative;color:#F2F4F7;";

    box.innerHTML = [
      '<div style="display:flex;align-items:center;justify-content:between;margin-bottom:16px;">',
      '  <div>',
      '    <div style="font-family:\'JetBrains Mono\',monospace;font-size:11px;color:#D1FF4D;text-transform:uppercase;letter-spacing:0.2em;font-weight:bold;margin-bottom:6px;">LIVE VISION ENGINE</div>',
      '    <h3 style="font-size:22px;font-weight:700;margin:0;letter-spacing:-0.02em;">Connect Gemini Flash Vision</h3>',
      '  </div>',
      '  <button id="cl-modal-close" style="background:none;border:none;color:#8B949E;font-size:24px;cursor:pointer;position:absolute;top:20px;right:20px;">&times;</button>',
      '</div>',
      '<p style="font-size:13px;color:#8B949E;line-height:1.6;margin-bottom:20px;">',
      '  To classify items in real-time with Google Gemini Vision, enter your free Google Gemini API Key below.',
      '  You can get one in 30 seconds with your Google account (100% free, 15 RPM).',
      '</p>',
      '<div style="margin-bottom:20px;">',
      '  <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noopener noreferrer" style="display:inline-flex;align-items:center;gap:6px;color:#D1FF4D;font-family:\'JetBrains Mono\',monospace;font-size:12px;text-decoration:none;border-bottom:1px dashed #D1FF4D;padding-bottom:2px;">',
      '    &rarr; Click here to get a free key from Google AI Studio',
      '  </a>',
      '</div>',
      '<label style="display:block;margin-bottom:8px;font-family:\'JetBrains Mono\',monospace;font-size:11px;color:#8B949E;text-transform:uppercase;letter-spacing:0.1em;">Gemini API Key (or multiple keys separated by comma)</label>',
      '<input id="cl-api-key-input" type="password" placeholder="AIzaSy... (supports key1, key2 for failover)" style="width:100%;box-sizing:border-box;background:#090A0C;border:1px solid #22262B;color:#F2F4F7;padding:12px 14px;font-family:\'JetBrains Mono\',monospace;font-size:13px;outline:none;margin-bottom:12px;" />',
      '<div style="font-size:11px;color:#8B949E;line-height:1.4;margin-bottom:20px;">💡 Tip: You can paste backup keys separated by commas. If one key hits Google\'s daily free quota, CampusLoop automatically rotates to the next key.</div>',
      '<div style="display:flex;gap:12px;justify-content:flex-end;">',
      '  <button id="cl-modal-cancel" style="background:transparent;border:1px solid #22262B;color:#8B949E;padding:10px 18px;font-size:13px;cursor:pointer;">Cancel</button>',
      '  <button id="cl-modal-save" style="background:#D1FF4D;border:none;color:#090A0C;padding:10px 22px;font-size:13px;font-weight:bold;cursor:pointer;">Save & Enable Vision</button>',
      '</div>'
    ].join("");

    overlay.appendChild(box);
    document.body.appendChild(overlay);

    document.getElementById("cl-modal-close").onclick = function() { overlay.style.display = "none"; };
    document.getElementById("cl-modal-cancel").onclick = function() { overlay.style.display = "none"; };
    document.getElementById("cl-modal-save").onclick = function() {
      var val = document.getElementById("cl-api-key-input").value;
      if (!val) {
        alert("Please paste your Gemini API key.");
        return;
      }
      setGeminiKey(val);
      overlay.style.display = "none";
      alert("Gemini Live Vision enabled! You can now scan items with camera or photos.");
    };

    overlay.onclick = function(e) {
      if (e.target === overlay) overlay.style.display = "none";
    };
  }

  function openModal() {
    renderModal();
    var m = document.getElementById("cl-gemini-modal");
    var inp = document.getElementById("cl-api-key-input");
    if (inp) inp.value = getGeminiKey();
    if (m) m.style.display = "flex";
  }

  function updateBadge() {
    var b = document.getElementById("cl-gemini-badge");
    if (!b) return;
    var k = getGeminiKey();
    var closeHtml = '<span id="cl-badge-close" title="Dismiss" style="display:inline-flex;align-items:center;justify-content:center;width:18px;height:18px;margin-left:10px;color:#8B949E;font-size:15px;cursor:pointer;line-height:1;border-radius:2px;" onmouseover="this.style.color=\'#F2F4F7\'" onmouseout="this.style.color=\'#8B949E\'">&times;</span>';
    if (k) {
      b.innerHTML = '<span style="display:inline-block;width:8px;height:8px;background:#00E676;border-radius:50%;margin-right:6px;"></span>Gemini Live Vision: Active <span style="color:#8B949E;margin-left:4px;text-decoration:underline;">(Edit)</span>' + closeHtml;
      b.style.borderColor = "#00E67655";
    } else {
      b.innerHTML = '<span style="display:inline-block;width:8px;height:8px;background:#FFB020;border-radius:50%;margin-right:6px;"></span>Live Vision: Connect Free Gemini Key &rarr;' + closeHtml;
      b.style.borderColor = "#FFB02088";
    }
    var closeBtn = document.getElementById("cl-badge-close");
    if (closeBtn) {
      closeBtn.onclick = function(e) {
        e.stopPropagation();
        b.style.display = "none";
        localStorage.setItem("cl_hide_gemini_badge", "1");
      };
    }
  }

  function renderBadge() {
    if (localStorage.getItem("cl_hide_gemini_badge") === "1") return;
    var p = window.location.pathname;
    if (p === '/' || p === '' || p === '/landing' || p.endsWith('/index.html') || p.endsWith('/landing.html')) return;
    if (document.getElementById("cl-gemini-badge")) return;
    var badge = document.createElement("div");
    badge.id = "cl-gemini-badge";
    badge.style.cssText = "position:fixed;bottom:16px;right:16px;z-index:99999;font-family:'JetBrains Mono',monospace;font-size:11px;padding:8px 14px;background:#121418;border:1px solid #22262B;color:#F2F4F7;cursor:pointer;display:flex;align-items:center;box-shadow:0 6px 16px rgba(0,0,0,0.6);transition:all 0.2s;user-select:none;";
    badge.onclick = openModal;
    document.body.appendChild(badge);
    updateBadge();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function() {
      renderBadge();
    });
  } else {
    renderBadge();
  }

  async function fetchWithTimeout(url, options, timeoutMs) {
    var controller = new AbortController();
    var timer = setTimeout(function() { controller.abort(); }, timeoutMs || 10000);
    try {
      var opts = Object.assign({}, options, { signal: controller.signal });
      var res = await fetch(url, opts);
      clearTimeout(timer);
      return res;
    } catch(e) {
      clearTimeout(timer);
      if (e.name === "AbortError") {
        throw new Error("AI request timed out after 10s. Please retry.");
      }
      throw e;
    }
  }

  function smartFallbackClassify(dataUrl) {
    var samplePool = [
      {
        item: "Snack / Ice Cream Packaging (Plastic Foil)",
        category: "non_recyclable",
        final_category: "non_recyclable",
        confidence: 0.92,
        reason: "Multilayer plastic packaging and foil wrapper with food contact residue. Non-recyclable in standard blue stream.",
        bin: "Red bin",
        bin_en: "Red bin for non-recyclable snack wrapper",
        bin_hi: "गैर-रीसायकल प्लास्टिक रैपर के लिए लाल कूड़ेदान",
        guard_en: "Plastic snack wrapper with food contact belongs in the red non-recyclable bin.",
        guard_hi: "खाद्य संपर्क वाला प्लास्टिक रैपर लाल गैर-रीसायकल डिब्बे में जाता है।",
        contaminated: false,
        guardrail: false,
        blocked: false,
        credits: 5,
        credit_note: "+5 eco-credits awarded for correct non-recyclable disposal."
      },
      {
        item: "Clean Paper / Study Notes",
        category: "recyclable",
        final_category: "recyclable",
        confidence: 0.94,
        reason: "Clean dry paper without food grease. Suitable for paper recycling.",
        bin: "Blue bin",
        bin_en: "Blue bin for recyclable paper",
        bin_hi: "रीसायकल योग्य कागज के लिए नीला कूड़ेदान",
        guard_en: "Clean dry paper belongs in the blue recycling bin.",
        guard_hi: "साफ सूखा कागज नीले रीसाइक्लिंग बिन में जाता है।",
        contaminated: false,
        guardrail: false,
        blocked: false,
        credits: 10,
        credit_note: "+10 eco-credits awarded for high-grade paper recycling."
      },
      {
        item: "PET Plastic Water Bottle",
        category: "recyclable",
        final_category: "recyclable",
        confidence: 0.95,
        reason: "Transparent PET beverage bottle. High recyclability value.",
        bin: "Blue bin",
        bin_en: "Blue bin for recyclable plastic bottle",
        bin_hi: "रीसायकल योग्य प्लास्टिक की बोतल के लिए नीला कूड़ेदान",
        guard_en: "Empty plastic bottle belongs in the blue recycling bin.",
        guard_hi: "खाली प्लास्टिक की बोतल नीले रीसाइक्लिंग डिब्बे में जाती है।",
        contaminated: false,
        guardrail: false,
        blocked: false,
        credits: 10,
        credit_note: "+10 eco-credits awarded for clean PET recycling."
      }
    ];
    return JSON.parse(JSON.stringify(samplePool[0]));
  }

  async function classifyWithGemini(apiKey, dataUrl) {
    if (!dataUrl) throw new Error("No image data provided for scanning.");
    var mimeType = "image/jpeg";
    var base64Data = dataUrl;
    if (dataUrl.indexOf(",") !== -1) {
      var parts = dataUrl.split(",");
      var mimeMatch = parts[0].match(/:(.*?);/);
      if (mimeMatch) mimeType = mimeMatch[1];
      base64Data = parts[1];
    }

    var prompt = "You are CampusLoop Waste Intelligence AI for university campus waste segregation and circular economy.\\n" +
      "Analyze the provided image of an item held or placed before the camera.\\n" +
      "First, identify what the main object is, its approximate size/volume, and material.\\n" +
      "Determine if the item is a real recyclable/organic waste disposal, or if it is a personal belonging/electronic device/person.\\n" +
      "\\n" +
      "RULE 1: PERSONAL ITEMS & ELECTRONICS (Not Waste)\\n" +
      "If it is a smartphone, laptop, clothing being worn, human face/body, or personal item not meant to be thrown away:\\n" +
      "- item: name the item accurately (e.g. smartphone, wristwatch, headphones)\\n" +
      "- category: 'non_recyclable'\\n" +
      "- final_category: 'non_recyclable'\\n" +
      "- blocked: 'not_waste'\\n" +
      "- guardrail: true\\n" +
      "- credits: 0\\n" +
      "- credit_note: 'Personal belonging detected. Credits are only awarded for verified waste disposal.'\\n" +
      "- guard_en: 'This is a personal electronic device (smartphone) and should not be thrown into a standard waste bin.'\\n" +
      "- guard_hi: 'यह एक व्यक्तिगत इलेक्ट्रॉनिक उपकरण है और इसे सामान्य कचरे के डिब्बे में नहीं फेंकना चाहिए।'\\n" +
      "- reason: 'This is a personal electronic device (smartphone) and should not be thrown into a standard waste bin.'\\n" +
      "- bin_en: 'Personal item, not for waste bins' (or 'E-waste collection bin' for electronic disposal)\\n" +
      "- bin_hi: 'व्यक्तिगत वस्तु, कचरा डिब्बे के लिए नहीं'\\n" +
      "\\n" +
      "RULE 2: FAIR-PLAY & MICRO-SCRAPS (Paper Slips, Chits, Receipts)\\n" +
      "If the item is a small piece of torn paper, small scrap, chit, receipt, bus ticket, or micro-waste:\\n" +
      "- item: describe accurately (e.g. 'small paper slip', 'torn paper scrap', 'paper chit', 'receipt')\\n" +
      "- category: 'recyclable' (or 'non_recyclable' if thermal receipt)\\n" +
      "- final_category: 'recyclable' (or 'non_recyclable' if thermal receipt)\\n" +
      "- guardrail: true\\n" +
      "- credits: 0\\n" +
      "- credit_note: 'Micro-scraps and small paper slips have negligible recycling yield. Bundle paper into bulk stacks to earn eco-credits under fair-play rules.'\\n" +
      "- guard_en: 'Small paper scrap detected. Place in the blue bin, but zero credits are awarded for micro-scraps under fair-play rules.'\\n" +
      "- guard_hi: 'कागज का छोटा टुकड़ा। कृपया इसे नीले डिब्बे में डालें, लेकिन छोटे टुकड़ों के लिए कोई क्रेडिट नहीं मिलता है।'\\n" +
      "- reason: 'Small torn paper scraps have negligible weight and cannot be baled effectively by recyclers. Bulk paper stacks are required for credit issuance.'\\n" +
      "- bin_en: 'Blue bin for dry paper waste'\\n" +
      "- bin_hi: 'सूखे कागज के लिए नीले डिब्बे का प्रयोग करें'\\n" +
      "\\n" +
      "RULE 3: SUBSTANTIAL CLEAN RECYCLABLE OR ORGANIC ITEMS\\n" +
      "If it is a full clean recyclable (notebook, book, bottle, can, cardboard box, cup) or organic waste (banana peel, meal leftover):\\n" +
      "- credits: 10\\n" +
      "- credit_note: null\\n" +
      "- contaminated: false\\n" +
      "- guardrail: false\\n" +
      "- guard_en: null\\n" +
      "- guard_hi: null\\n" +
      "\\n" +
      "RULE 4: MULTI-LAYER PACKAGING & SNACK WRAPPERS (Oreo, Chips, Biscuits)\\n" +
      "If packaging is metallized plastic/foil laminate (such as Oreo packet, biscuit wrapper, chips wrapper, candy wrapper) or food-soiled packaging:\\n" +
      "- item: name the item accurately (e.g. 'Oreo biscuit wrapper', 'snack packet', 'chips wrapper')\\n" +
      "- category: 'non_recyclable'\\n" +
      "- final_category: 'non_recyclable'\\n" +
      "- contaminated: true\\n" +
      "- guardrail: true\\n" +
      "- credits: 5\\n" +
      "- credit_note: 'Multi-layer plastic and metallized packaging cannot be mechanically recycled with dry recyclables. Intercepted for non-recyclable stream.'\\n" +
      "- guard_en: 'Multi-layer plastic snack wrapper detected. Dispose in the red bin for non-recyclable waste.'\\n" +
      "- guard_hi: 'मल्टी-लेयर प्लास्टिक स्नैक रैपर मिला है। कृपया इसे गैर-रीसाइक्लेबल लाल डिब्बे में डालें।'\\n" +
      "- reason: 'Composite metallized film cannot be separated in mechanical pulping/recycling and must be disposed in non-recyclable bins.'\\n" +
      "- bin_en: 'Red bin for non-recyclable waste'\\n" +
      "- bin_hi: 'गैर-पुनर्चक्रण योग्य कचरे के लिए लाल डिब्बे का प्रयोग करें'\\n" +
      "\\n" +
      "Return ONLY a raw JSON object with keys: item, category, final_category, confidence (0.8-0.99), contaminated (bool), guardrail (bool), material (string), reason (string), bin_en (string), bin_hi (string), guard_en (string or null), guard_hi (string or null), blocked (string or null), credits (int), credit_note (string or null).";

    var payload = {
      contents: [
        {
          parts: [
            { text: prompt },
            {
              inlineData: {
                mimeType: mimeType,
                data: base64Data
              }
            }
          ]
        }
      ],
      generationConfig: {
        responseMimeType: "application/json"
      }
    };

    // 1. Direct model endpoint pipeline (prioritize active Gemini Flash models)
    var endpointsToTry = [];
    if (discoveredModel) {
      endpointsToTry.push(discoveredModel);
    }
    endpointsToTry.push({ apiVer: "v1beta", model: "gemini-flash-latest" });
    endpointsToTry.push({ apiVer: "v1beta", model: "gemini-flash-lite-latest" });
    endpointsToTry.push({ apiVer: "v1beta", model: "gemini-3.8-flash" });
    endpointsToTry.push({ apiVer: "v1beta", model: "gemini-3.5-flash" });
    endpointsToTry.push({ apiVer: "v1beta", model: "gemini-3.5-flash-lite" });

    var resultData = null;
    var lastError = null;

    for (var ei = 0; ei < endpointsToTry.length; ei++) {
      var target = endpointsToTry[ei];
      var endpoint = "https://generativelanguage.googleapis.com/" + target.apiVer + "/models/" + target.model + ":generateContent?key=" + encodeURIComponent(apiKey);

      try {
        var res = await fetchWithTimeout(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        }, 20000);

        if (res.ok) {
          resultData = await res.json();
          discoveredModel = target;
          console.log("[CampusLoop] Successfully classified with " + target.apiVer + "/models/" + target.model);
          break;
        }

        var errData = await res.json().catch(function() { return {}; });
        var errMsg = (errData && errData.error && errData.error.message) || "";

        if (res.status === 429) {
          var isDaily = /quota|perday|per_day|daily|resource_exhausted/i.test(errMsg);
          if (isDaily) {
            throw new Error("Google Gemini daily free quota reached for this API key. Generate a fresh free key at aistudio.google.com and click '(Edit)' in bottom-left to paste it.");
          }

          // Auto-retry once after 2.5s for burst limit
          console.warn("[CampusLoop] 429 Rate limit burst. Auto-retrying in 2.5s...");
          await new Promise(function(r) { setTimeout(r, 2500); });
          var retryRes = await fetchWithTimeout(endpoint, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
          }, 20000);

          if (retryRes.ok) {
            resultData = await retryRes.json();
            discoveredModel = target;
            console.log("[CampusLoop] Retry succeeded with " + target.apiVer + "/models/" + target.model);
            break;
          } else {
            var retryErr = await retryRes.json().catch(function() { return {}; });
            var retryMsg = (retryErr && retryErr.error && retryErr.error.message) || errMsg;
            if (/quota|perday|per_day|daily|resource_exhausted/i.test(retryMsg)) {
              throw new Error("Google Gemini daily free quota reached on this API key. Generate a fresh key at aistudio.google.com and click '(Edit)' in bottom-left.");
            }
            throw new Error("Gemini rate limit: " + (retryMsg || "Too many requests. Please wait 10 seconds before next scan."));
          }
        }

        lastError = errMsg || ("HTTP " + res.status);
      } catch(fetchErr) {
        lastError = fetchErr.message;
        if (fetchErr.message && (fetchErr.message.indexOf("quota reached") !== -1 || fetchErr.message.indexOf("rate limit") !== -1)) {
          throw fetchErr;
        }
      }

      if (resultData) break;
    }

    if (!resultData) {
      throw new Error("Gemini Vision: " + (lastError || "Could not connect to model"));
    }

    function parseGeminiResponse(raw) {
      if (!raw) throw new Error("Empty response received from Gemini.");
      var clean = String(raw).trim();

      try { return JSON.parse(clean); } catch (e) {}

      var fenceMatch = clean.match(/`(?:json)?\s*([\s\S]*?)\s*`/i);
      if (fenceMatch && fenceMatch[1]) {
        try { return JSON.parse(fenceMatch[1].trim()); } catch (e) {}
      }

      var start = clean.indexOf("{");
      var end = clean.lastIndexOf("}");
      if (start !== -1 && end > start) {
        var sub = clean.substring(start, end + 1);
        try { return JSON.parse(sub); } catch (e) {}
      }

      throw new Error("Unable to parse Gemini output: " + clean.substring(0, 120));
    }

    var fullText = "";
    try {
      var parts = (resultData.candidates && resultData.candidates[0] && resultData.candidates[0].content && resultData.candidates[0].content.parts) || [];
      for (var pi = 0; pi < parts.length; pi++) {
        if (parts[pi].text) fullText += parts[pi].text;
      }
    } catch(pe) {
      fullText = "";
    }

    return parseGeminiResponse(fullText);
  }

    // API Route Handler
  // -------------------------------------------------------------
  async function handleApi(method, url, body) {
    method = (method || "GET").toUpperCase();
    var path = url.split("?")[0].replace(/^https?:\/\/[^\/]+/, "").replace(/^\/api/, "");
    if (!path.startsWith("/")) path = "/" + path;
    var params = {};
    if (url.indexOf("?") !== -1) {
      url.split("?")[1].split("&").forEach(function(pair) {
        var parts = pair.split("=");
        if (parts[0]) params[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1] || "");
      });
    }

    var parsedBody = {};
    if (typeof body === "string" && body.length > 0) {
      try { parsedBody = JSON.parse(body); } catch(e) {}
    } else if (typeof body === "object" && body !== null) {
      parsedBody = body;
    }

    // Auth Demo
    if (path === "/auth/demo" && method === "POST") {
      db.user.credits = db.wallet.credits;
      setStore("user", db.user);
      return { status: 200, data: { token: "demo-jwt-token-campusloop", user: db.user } };
    }

    // Auth Login
    if (path === "/auth/login" && method === "POST") {
      if (parsedBody.email) {
        db.user.email = parsedBody.email;
        if (parsedBody.email.toLowerCase().includes("admin")) {
          db.user.role = "admin";
          db.user.name = "Campus Operations Admin";
        } else {
          db.user.role = "student";
          db.user.name = "Demo Student";
        }
      }
      db.user.credits = db.wallet.credits;
      setStore("user", db.user);
      return { status: 200, data: { token: "demo-jwt-token-campusloop", user: db.user } };
    }

    // Auth Register
    if (path === "/auth/register" && method === "POST") {
      if (parsedBody.name) db.user.name = parsedBody.name;
      if (parsedBody.email) db.user.email = parsedBody.email;
      if (parsedBody.hostel) db.user.hostel = parsedBody.hostel;
      db.user.credits = db.wallet.credits;
      setStore("user", db.user);
      return { status: 200, data: { token: "demo-jwt-token-campusloop", user: db.user } };
    }

    // Auth Me
    if (path === "/auth/me" && method === "GET") {
      db.user.credits = db.wallet.credits;
      return { status: 200, data: db.user };
    }

    // Overview
    if (path === "/overview" && method === "GET") {
      db.overview.ts = new Date().toISOString();
      return { status: 200, data: db.overview };
    }

    // Zones
    if (path === "/zones" && method === "GET") {
      db.zones.ts = new Date().toISOString();
      return { status: 200, data: db.zones };
    }

    // Wallet
    if (path === "/wallet" && method === "GET") {
      return { status: 200, data: db.wallet };
    }

    // Leaderboard
    if (path === "/leaderboard" && method === "GET") {
      return { status: 200, data: db.leaderboard };
    }

    // Redeem reward
    var redeemMatch = path.match(/^\/rewards\/([^\/]+)\/redeem$/);
    if (redeemMatch && method === "POST") {
      var rId = redeemMatch[1];
      var reward = null;
      for (var i = 0; i < (db.wallet.rewards || []).length; i++) {
        if (db.wallet.rewards[i].id === rId) { reward = db.wallet.rewards[i]; break; }
      }
      if (!reward) return { status: 404, data: { detail: "Reward not found" } };
      if (db.wallet.credits < reward.cost) return { status: 400, data: { detail: "Insufficient credits" } };

      db.wallet.credits -= reward.cost;
      db.user.credits = db.wallet.credits;

      var hex = Math.floor(100000 + Math.random() * 900000).toString(16).toUpperCase();
      var coupon = {
        id: "c-" + Date.now(),
        user_id: db.user.id,
        reward_id: reward.id,
        title: reward.title,
        venue: reward.venue,
        code: "CL-" + hex,
        created_at: new Date().toISOString()
      };
      db.wallet.coupons = db.wallet.coupons || [];
      db.wallet.coupons.unshift(coupon);

      db.wallet.transactions = db.wallet.transactions || [];
      db.wallet.transactions.unshift({
        id: "txn-" + Date.now(),
        user_id: db.user.id,
        amount: -reward.cost,
        label: "Redeemed: " + reward.title,
        kind: "redeem",
        created_at: new Date().toISOString()
      });

      setStore("wallet", db.wallet);
      setStore("user", db.user);
      return { status: 200, data: coupon };
    }

    // Exchange batches
    if (path === "/exchange/batches" && method === "GET") {
      return { status: 200, data: db.batches };
    }
    if (path === "/exchange/batches" && method === "POST") {
      var code = "BATCH-" + Math.floor(100 + Math.random() * 900);
      var newBatch = {
        id: "b-" + Date.now(),
        code: code,
        material: parsedBody.material || "Recyclable plastic",
        weight_kg: Number(parsedBody.weight_kg) || 25,
        price_per_kg: Number(parsedBody.price_per_kg) || 18,
        source_zone: parsedBody.source_zone || "MAC (Central Canteen)",
        stage: "collected",
        trend: [22, 35, 42, 38, 45, 50],
        purity: null,
        buyer: null,
        revenue: 0,
        created_at: new Date().toISOString()
      };
      db.batches.unshift(newBatch);
      setStore("batches", db.batches);
      return { status: 200, data: newBatch };
    }

    var advanceMatch = path.match(/^\/exchange\/batches\/([^\/]+)\/advance$/);
    if (advanceMatch && method === "POST") {
      var bId = advanceMatch[1];
      var batch = null;
      for (var j = 0; j < db.batches.length; j++) {
        if (db.batches[j].id === bId || db.batches[j].code === bId) { batch = db.batches[j]; break; }
      }
      if (!batch) return { status: 404, data: { detail: "Batch not found" } };
      if (batch.stage === "collected") {
        batch.stage = "tested";
        batch.purity = 94.2;
      } else if (batch.stage === "tested") {
        batch.stage = "sold";
        batch.buyer = "Apex Circular Systems";
        batch.revenue = Math.round(batch.weight_kg * batch.price_per_kg);
      }
      setStore("batches", db.batches);
      return { status: 200, data: batch };
    }

    // Reports
    if (path === "/reports" && method === "GET") {
      var st = params.status;
      var list = db.reports;
      if (st) {
        list = list.filter(function(r) { return r.status === st; });
      }
      return { status: 200, data: list };
    }
    if (path === "/reports/mine" && method === "GET") {
      return { status: 200, data: db.reports };
    }
    if (path === "/reports" && method === "POST") {
      var zoneName = parsedBody.zone_id;
      if (db.zones && db.zones.zones) {
        for (var z = 0; z < db.zones.zones.length; z++) {
          if (db.zones.zones[z].id === parsedBody.zone_id) { zoneName = db.zones.zones[z].name; break; }
        }
      }
      var rep = {
        id: "rep-" + Date.now(),
        user_id: db.user.id,
        user_name: db.user.name,
        zone_id: parsedBody.zone_id,
        zone: zoneName,
        note: parsedBody.note || "Overflow reported from digital twin",
        fill_at_report: 78.5,
        fill_now: 80,
        status: "pending",
        reward: 15,
        created_at: new Date().toISOString()
      };
      db.reports.unshift(rep);
      setStore("reports", db.reports);
      return { status: 200, data: rep };
    }

    var reviewMatch = path.match(/^\/reports\/([^\/]+)\/review$/);
    if (reviewMatch && method === "POST") {
      var repId = reviewMatch[1];
      var rObj = null;
      for (var k = 0; k < db.reports.length; k++) {
        if (db.reports[k].id === repId) { rObj = db.reports[k]; break; }
      }
      if (!rObj) return { status: 404, data: { detail: "Report not found" } };
      rObj.status = parsedBody.decision || "approved";
      setStore("reports", db.reports);
      return { status: 200, data: rObj };
    }

    // Scans History
    if (path === "/scans" && method === "GET") {
      return { status: 200, data: db.scans };
    }

    // Real Live Scan with Gemini Flash Vision
    if (path === "/scan" && method === "POST") {
      var keys = getGeminiKeys();
      if (keys.length === 0) {
        openModal();
        return {
          status: 400,
          data: { detail: "Please connect your free Gemini API key to enable live camera AI identification." }
        };
      }

      var scanRes = null;
      var lastErr = null;
      var imgPayload = (parsedBody && (parsedBody.image_base64 || parsedBody.image)) || "";

      for (var ki = 0; ki < keys.length; ki++) {
        try {
          scanRes = await classifyWithGemini(keys[ki], imgPayload);
          if (scanRes) break;
        } catch(kErr) {
          lastErr = kErr;
          console.warn("[CampusLoop] Key #" + (ki + 1) + " note:", kErr.message);
        }
      }

      if (!scanRes) {
        return {
          status: 500,
          data: { detail: (lastErr && lastErr.message) || "Gemini Vision: Classification could not be completed." }
        };
      }

      try {
        scanRes.id = "scan-" + Date.now();
        if (!scanRes.final_category) scanRes.final_category = scanRes.category || "non_recyclable";
        if (!scanRes.category) scanRes.category = scanRes.final_category || "non_recyclable";
        if (["organic", "recyclable", "non_recyclable"].indexOf(scanRes.final_category) === -1) {
          scanRes.final_category = "non_recyclable";
        }
        if (["organic", "recyclable", "non_recyclable"].indexOf(scanRes.category) === -1) {
          scanRes.category = scanRes.final_category;
        }

        // Ensure audio speech line speaks the full guardrail warning / explanation sentence
        if (scanRes.blocked || scanRes.contaminated || scanRes.guardrail || scanRes.credit_note || !scanRes.guard_en) {
          if (!scanRes.guard_en && scanRes.reason) {
            scanRes.guard_en = scanRes.reason;
          }
          if (scanRes.blocked || scanRes.credit_note) {
            scanRes.guardrail = true;
          }
        }
        scanRes.user_id = db.user.id;
        scanRes.created_at = new Date().toISOString();

        db.scans.unshift(scanRes);
        setStore("scans", db.scans);

        // Award eco-credits
        var award = scanRes.credits || 0;
        if (award > 0) {
          db.wallet.credits += award;
          db.user.credits = db.wallet.credits;
          db.wallet.transactions.unshift({
            id: "txn-" + Date.now(),
            user_id: db.user.id,
            amount: award,
            label: "Sorted: " + (scanRes.item || "Waste item"),
            kind: "scan",
            created_at: scanRes.created_at
          });
          setStore("wallet", db.wallet);
          setStore("user", db.user);
        }

        return { status: 200, data: scanRes };
      } catch(err) {
        console.error("Gemini classification failed:", err);
        return {
          status: 500,
          data: { detail: "Gemini Vision error: " + (err.message || String(err)) }
        };
      }
    }

    return { status: 404, data: { detail: "Endpoint not found: " + path } };
  }

  // Intercept XMLHttpRequest
  var RealXHR = window.XMLHttpRequest;
  function MockXHR() {
    var xhr = new RealXHR();
    var _method = "GET";
    var _url = "";
    var _headers = {};
    var _isMock = false;

    var mockResponse = {
      status: 200,
      statusText: "OK",
      responseText: "",
      response: "",
      readyState: 0,
      headers: { "content-type": "application/json" }
    };

    var handlers = {};

    this.open = function(method, url) {
      _method = method;
      _url = url;
      if (url.indexOf("/api") !== -1 || url.indexOf("emergentagent.com") !== -1) {
        _isMock = true;
      } else {
        return xhr.open.apply(xhr, arguments);
      }
    };

    this.setRequestHeader = function(k, v) {
      _headers[k] = v;
      if (!_isMock) xhr.setRequestHeader.apply(xhr, arguments);
    };

    this.addEventListener = function(event, fn) {
      handlers[event] = handlers[event] || [];
      handlers[event].push(fn);
      if (!_isMock) xhr.addEventListener.apply(xhr, arguments);
    };

    this.removeEventListener = function(event, fn) {
      if (handlers[event]) {
        handlers[event] = handlers[event].filter(function(f) { return f !== fn; });
      }
      if (!_isMock) xhr.removeEventListener.apply(xhr, arguments);
    };

    this.getAllResponseHeaders = function() {
      if (_isMock) return "content-type: application/json\r\n";
      return xhr.getAllResponseHeaders();
    };

    this.getResponseHeader = function(name) {
      if (_isMock) {
        if (name.toLowerCase() === "content-type") return "application/json";
        return null;
      }
      return xhr.getResponseHeader(name);
    };

    var self = this;
    this.send = function(body) {
      if (!_isMock) {
        return xhr.send.apply(xhr, arguments);
      }

      handleApi(_method, _url, body).then(function(res) {
        self.status = res.status;
        self.statusText = res.status === 200 ? "OK" : "Error";
        self.readyState = 4;
        self.responseText = JSON.stringify(res.data);
        self.response = JSON.stringify(res.data);

        var evt = new Event("readystatechange");
        if (typeof self.onreadystatechange === "function") self.onreadystatechange(evt);
        if (handlers["readystatechange"]) handlers["readystatechange"].forEach(function(fn) { fn.call(self, evt); });

        var loadEvt = new Event("load");
        if (typeof self.onload === "function") self.onload(loadEvt);
        if (handlers["load"]) handlers["load"].forEach(function(fn) { fn.call(self, loadEvt); });

        var loadEndEvt = new Event("loadend");
        if (typeof self.onloadend === "function") self.onloadend(loadEndEvt);
        if (handlers["loadend"]) handlers["loadend"].forEach(function(fn) { fn.call(self, loadEndEvt); });
      }).catch(function(err) {
        self.status = 500;
        self.statusText = "Internal Error";
        self.readyState = 4;
        self.responseText = JSON.stringify({ detail: String(err) });
        self.response = self.responseText;
        if (typeof self.onload === "function") self.onload(new Event("load"));
      });
    };

    // Forward getters & setters
    Object.defineProperty(this, "status", {
      get: function() { return _isMock ? mockResponse.status : xhr.status; },
      set: function(v) { mockResponse.status = v; }
    });
    Object.defineProperty(this, "statusText", {
      get: function() { return _isMock ? mockResponse.statusText : xhr.statusText; },
      set: function(v) { mockResponse.statusText = v; }
    });
    Object.defineProperty(this, "readyState", {
      get: function() { return _isMock ? mockResponse.readyState : xhr.readyState; },
      set: function(v) { mockResponse.readyState = v; }
    });
    Object.defineProperty(this, "responseText", {
      get: function() { return _isMock ? mockResponse.responseText : xhr.responseText; },
      set: function(v) { mockResponse.responseText = v; }
    });
    Object.defineProperty(this, "response", {
      get: function() { return _isMock ? mockResponse.response : xhr.response; },
      set: function(v) { mockResponse.response = v; }
    });
    Object.defineProperty(this, "responseType", {
      get: function() { return _isMock ? "" : xhr.responseType; },
      set: function(v) { if (!_isMock) xhr.responseType = v; }
    });
  }

  window.XMLHttpRequest = MockXHR;
  window.openGeminiVisionSetup = openModal;
  console.log("[CampusLoop] Gemini Flash Vision engine active.");
})();



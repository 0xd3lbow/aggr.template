{
  "version": 7,
  "createdAt": 1696447789125,
  "updatedAt": 1696551848310,
  "name": "CVDs",
  "id": "cvds",
  "states": {
    "panes": {
      "_id": "panes",
      "locked": false,
      "panes": {
        "chart": {
          "id": "chart",
          "name": "",
          "type": "chart",
          "markets": [
            "BINANCE_FUTURES:btcbusd",
            "BINANCE_FUTURES:btcusd_perp",
            "BINANCE_FUTURES:btcusdt",
            "BINANCE:btcbusd",
            "BINANCE:btcusdc",
            "BINANCE:btcusdt",
            "BITFINEX:BTCF0:USTF0",
            "BITFINEX:BTCUSD",
            "BITFINEX:BTCUST",
            "BITMEX:XBT_USDT",
            "BITMEX:XBTUSD",
            "BITMEX:XBTUSDT",
            "BITSTAMP:btcusd",
            "BITSTAMP:btcusdt",
            "BYBIT:BTCUSD",
            "BYBIT:BTCUSDC-SPOT",
            "BYBIT:BTCUSDT",
            "BYBIT:BTCUSDT-SPOT",
            "COINBASE:BTC-USD",
            "COINBASE:BTC-USDT",
            "DERIBIT:BTC_USDC-PERPETUAL",
            "DERIBIT:BTC-PERPETUAL",
            "KRAKEN:PI_XBTUSD",
            "KRAKEN:XBT/USD",
            "KRAKEN:XBT/USDC",
            "KRAKEN:XBT/USDT",
            "KUCOIN:BTC-USDC",
            "KUCOIN:BTC-USDT",
            "KUCOIN:XBTUSDM",
            "KUCOIN:XBTUSDTM",
            "MEXC:BTC_USD",
            "MEXC:BTC_USDT",
            "MEXC:BTCUSDT",
            "OKEX:BTC-USD-SWAP",
            "OKEX:BTC-USDC",
            "OKEX:BTC-USDC-SWAP",
            "OKEX:BTC-USDT",
            "OKEX:BTC-USDT-SWAP"
          ],
          "zoom": 1.25
        },
        "chart copy 1": {
          "id": "chart copy 1",
          "name": "",
          "type": "chart",
          "zoom": 1.25,
          "settings": {
            "indicatorsErrors": {
              "bybit-spot-cvd": null,
              "okex-spot-cvd": null
            },
            "indicators": {
              "binance-spot-cvd": {
                "script": "line(cum((BINANCE:btcbusd.vbuy+BINANCE:btcusdc.vbuy+BINANCE:btcusdt.vbuy)-(BINANCE:btcbusd.vsell+BINANCE:btcusdc.vsell+BINANCE:btcusdt.vsell)), title=BINANCE SPOT CVD)",
                "id": "binance-spot-cvd",
                "name": "Binance Spot CVD",
                "options": {
                  "priceScaleId": "cvd-btc-binance-spot",
                  "color": "rgb(255,229,0)",
                  "lineStyle": 0,
                  "lineWidth": 1,
                  "visible": true,
                  "scaleMargins": {
                    "top": 0.52,
                    "bottom": 0.23
                  },
                  "priceFormat": {
                    "type": "volume",
                    "precision": 2,
                    "minMove": 0.01,
                    "auto": false
                  },
                  "lastValueVisible": true
                },
                "description": null,
                "unsavedChanges": true,
                "series": [
                  "binance-spot-cvd copy 3"
                ],
                "displayName": "Binance Spot CVD",
                "createdAt": 1657347988177,
                "navigationState": {
                  "sections": [
                    "position",
                    "colors",
                    "defaultOptions",
                    "format"
                  ],
                  "tab": "#script",
                  "optionsQuery": "",
                  "fontSize": 1
                },
                "updatedAt": 1686941087037,
                "preview": {},
                "optionsDefinitions": {}
              },
              "bybit-spot-cvd": {
                "script": "line(cum((BYBIT:BTCUSDC-SPOT.vbuy+BYBIT:BTCUSDT-SPOT.vbuy)-(BYBIT:BTCUSDC-SPOT.vsell+BYBIT:BTCUSDT-SPOT.vsell)), title=BYBIT SPOT CVD)",
                "id": "bybit-spot-cvd",
                "name": "BYBIT SPOT CVD",
                "options": {
                  "priceScaleId": "cvd-btc-binance-spot",
                  "color": "rgb(246,197,76)",
                  "lineStyle": 0,
                  "lineWidth": 1,
                  "visible": true,
                  "scaleMargins": {
                    "top": 0.52,
                    "bottom": 0.23
                  },
                  "priceFormat": {
                    "type": "volume",
                    "precision": 2,
                    "minMove": 0.01,
                    "auto": false
                  },
                  "lastValueVisible": true
                },
                "description": null,
                "unsavedChanges": true,
                "series": [
                  "bybit-spot-cvd copy 6"
                ],
                "displayName": "BYBIT SPOT CVD",
                "navigationState": {
                  "sections": [
                    "position",
                    "colors",
                    "defaultOptions",
                    "format"
                  ],
                  "tab": "#script",
                  "optionsQuery": "",
                  "fontSize": 1
                },
                "preview": {},
                "optionsDefinitions": {}
              },
              "okex-spot-cvd": {
                "script": "line(cum((OKEX:BTC-USDC.vbuy+OKEX:BTC-USDT.vbuy)-(OKEX:BTC-USDC.vsell+OKEX:BTC-USDT.vsell)), title=OKEX SPOT CVD)",
                "id": "okex-spot-cvd",
                "name": "OKEX SPOT CVD ",
                "options": {
                  "priceScaleId": "cvd-btc-binance-spot",
                  "color": "rgb(255,255,255)",
                  "lineStyle": 0,
                  "lineWidth": 1,
                  "visible": true,
                  "scaleMargins": {
                    "top": 0.52,
                    "bottom": 0.23
                  },
                  "priceFormat": {
                    "type": "volume",
                    "precision": 2,
                    "minMove": 0.01,
                    "auto": false
                  },
                  "lastValueVisible": true
                },
                "description": null,
                "unsavedChanges": true,
                "series": [
                  "okex-spot-cvd copy 3"
                ],
                "displayName": "OKEX SPOT CVD ",
                "navigationState": {
                  "sections": [
                    "position",
                    "colors",
                    "defaultOptions",
                    "format"
                  ],
                  "tab": "#script",
                  "optionsQuery": "",
                  "fontSize": 1
                },
                "preview": {},
                "optionsDefinitions": {}
              },
              "allmarkets": {
                "script": "plotline(BITFINEX:BTCUSD.close, color=#97c554, title=Bitfinex.spot)\nplotline(BINANCE:btcusdt.close, color=#f3ba2f, title=Binance.spot)\nplotline(OKEX:BTC-USDT.close, color=#5894f2, title=Okex.spot)\nplotline(KRAKEN:XBT/USD.close, color=#5841d8, title=Kraken.spot)\nplotline(COINBASE:BTC-USD.close, color=#0e70e2, title=Coinbase.spot)\nplotline(POLONIEX:BTC_USDT.close, color=#858b8f, title=Poloniex.spot)\nplotline(HUOBI:btcusdt.close, color=#2ca6e0, title=Huobi.spot)\nplotline(BITSTAMP:btcusd.close, color=#169f4a, title=Bitstamp.spot)\nplotline(BITMEX:XBTUSD.close, color=#595fb5, title=Bitmex.perp)\nplotline(BITFINEX:BTCF0:USTF0.close, color=#97c554, title=Bitfinex.perp)\nplotline(OKEX:BTC-USD-SWAP.close, color=#5894f2, title=Okex.perp)\nplotline(BINANCE_FUTURES:btcusdt.close, color=#f3ba2f, title=Binance.perp)\nplotline(BINANCE_FUTURES:btcusd_perp.close, color=#f3ba2f, title=Binance.perp)\nplotline(HUOBI:BTC-USD.close, color=#2ca6e0, title=Huobi.perp)\nplotline(KRAKEN:PI_XBTUSD.close, color=#5841d8, title=Kraken.perp)\nplotline(DERIBIT:BTC-PERPETUAL.close, color=#2dae9a, title=Deribit.perp)\nplotline(FTX:BTC-PERP.close, color=#02a6c2, title=Ftx.perp)\nplotline(BYBIT:BTCUSD.close, color=#f9b600, title=Bybit.perp)",
                "description": "Multiple markets at once",
                "name": "All markets",
                "options": {
                  "priceScaleId": "right",
                  "spotColor": "#81c784",
                  "futuresColor": "#ec407a",
                  "lastValueVisible": true,
                  "priceLineVisible": false,
                  "baseLineVisible": false,
                  "scaleMargins": {
                    "top": 0.04,
                    "bottom": 0.59
                  }
                },
                "id": "allmarkets",
                "createdAt": 1673293819993,
                "updatedAt": 1696451920053,
                "uses": 1,
                "unsavedChanges": false,
                "optionsDefinitions": {},
                "series": [
                  "allmarkets copy 2",
                  "a6l77yf4",
                  "94jbgsh9",
                  "49cse428",
                  "gb0hn0wd",
                  "wm3i8zcs",
                  "zqja07eu",
                  "ophnkill",
                  "m8kxbog3",
                  "egu6947z",
                  "1bjq4jkf",
                  "205qhrf2",
                  "v7oqn7c8",
                  "jpzgtdv7",
                  "r6owmg5j",
                  "f2dgcje3",
                  "nt9jmxhd",
                  "e2bfbra8"
                ],
                "displayName": "All markets"
              },
              "spot-delta": {
                "script": "_vbuy = (BINANCE:btcusdt.vbuy+COINBASE:BTC-USD.vbuy+BITFINEX:BTCUSD.vbuy+BINANCE:btcbusd.vbuy+BITFINEX:BTCUST.vbuy+COINBASE:BTC-USDT.vbuy+BITSTAMP:btcusd.vbuy)\n_vsell = (BINANCE:btcusdt.vsell+COINBASE:BTC-USD.vsell+BITFINEX:BTCUSD.vsell+BINANCE:btcbusd.vsell+BITFINEX:BTCUST.vsell+COINBASE:BTC-USDT.vsell+BITSTAMP:btcusd.vsell)\n\nvolume = _vbuy+_vsell\na = sma(Math.pow(volume,2),options.length)\nb = Math.pow(sum(volume,options.length),2)/Math.pow(options.length,2)\nstdev = Math.sqrt(a - b)\nbasis = sma(volume, options.length)\ndev = 1 * stdev\ntreshold = basis + dev\n\ndelta = _vbuy - _vsell\n\nplothistogram({ time: time, value: (delta), color: delta > 0 ? ( volume > treshold ? options.upColorHighVol : options.upColorLowVol) : ( volume > treshold ? options.downColorHighVol : options.downColorLowVol)}, title=\"Spot Delta\")",
                "id": "spot-delta",
                "name": "Spot Delta",
                "options": {
                  "priceScaleId": "aggr-spot-delta",
                  "upColor": "rgb(100,181,246)",
                  "downColor": "rgb(236,64,122)",
                  "visible": true,
                  "upColorLowVol": "rgb(31,106,34)",
                  "downColorLowVol": "rgb(108,17,24)",
                  "upColorHighVol": "rgb(109,223,113)",
                  "downColorHighVol": "rgb(220,34,50)",
                  "length": 14,
                  "scaleMargins": {
                    "top": 0.78,
                    "bottom": 0.02
                  },
                  "priceFormat": {
                    "type": "volume",
                    "precision": 2,
                    "minMove": 0.01,
                    "auto": false
                  },
                  "lastValueVisible": true
                },
                "description": null,
                "unsavedChanges": false,
                "series": [
                  "spot-delta copy 1"
                ],
                "displayName": "Spot Delta",
                "createdAt": 1657704764440,
                "navigationState": {
                  "sections": [
                    "position",
                    "colors",
                    "format",
                    "defaultOptions"
                  ],
                  "tab": 0,
                  "optionsQuery": "",
                  "fontSize": 1
                },
                "updatedAt": 1696452184905,
                "preview": {},
                "optionsDefinitions": {}
              },
              "spot-cvd": {
                "script": "line(cum((BINANCE:btcusdt.vbuy+BINANCE:btcusdc.vbuy+BITFINEX:BTCUSD.vbuy+BITSTAMP:btcusd.vbuy+BITSTAMP:btcusdt.vbuy+BITSTAMP:btcusdc.vbuy+COINBASE:BTC-USDC.vbuy+COINBASE:BTC-USD.vbuy+COINBASE:BTC-USDT.vbuy+FTX:BTC/USD.vbuy+FTX:BTC/USDT.vbuy+HUOBI:btcusdt.vbuy+HUOBI:btcusdc.vbuy+KRAKEN:XBT/USDC.vbuy+KRAKEN:XBT/USDT.vbuy+KRAKEN:XBT/USD.vbuy+OKEX:BTC-USDT.vbuy+OKEX:BTC-USDC.vbuy+POLONIEX:BTC_USDT.vbuy+POLONIEX:USDC_BTC.vbuy)-(BINANCE:btcusdt.vsell+BINANCE:btcusdc.vsell+BITFINEX:BTCUSD.vsell+BITSTAMP:btcusd.vsell+BITSTAMP:btcusdt.vsell+BITSTAMP:btcusdc.vsell+COINBASE:BTC-USDC.vsell+COINBASE:BTC-USD.vsell+COINBASE:BTC-USDT.vsell+FTX:BTC/USD.vsell+FTX:BTC/USDT.vsell+HUOBI:btcusdt.vsell+HUOBI:btcusdc.vsell+KRAKEN:XBT/USDC.vsell+KRAKEN:XBT/USDT.vsell+KRAKEN:XBT/USD.vsell+OKEX:BTC-USDT.vsell+OKEX:BTC-USDC.vsell+POLONIEX:BTC_USDT.vsell+POLONIEX:USDC_BTC.vsell)), title=SPOT CVD)",
                "name": "SPOT CVD",
                "description": "CVD specific markets",
                "options": {
                  "priceScaleId": "cvd-btc-binance-spot",
                  "priceFormat": {
                    "type": "volume"
                  },
                  "color": "rgb(24,72,204)",
                  "visible": true,
                  "scaleMargins": {
                    "top": 0.04,
                    "bottom": 0.52
                  },
                  "lastValueVisible": true
                },
                "id": "spot-cvd",
                "createdAt": 1673293819993,
                "updatedAt": 1696452450915,
                "uses": 1,
                "unsavedChanges": true,
                "series": [
                  "spot-cvd copy 3"
                ],
                "displayName": "SPOT CVD",
                "optionsDefinitions": {}
              }
            },
            "priceScales": {
              "right": {
                "scaleMargins": {
                  "top": 0.04,
                  "bottom": 0.59
                },
                "priceFormat": {
                  "precision": 1,
                  "minMove": 0.1
                },
                "indicators": [
                  "All markets"
                ]
              },
              "cvd": {
                "scaleMargins": {
                  "top": 0.84,
                  "bottom": 0
                }
              },
              "liquidations": {
                "scaleMargins": {
                  "top": 0.82,
                  "bottom": 0.1
                }
              },
              "volume": {
                "scaleMargins": {
                  "top": 0.84,
                  "bottom": 0
                }
              },
              "cvd-btc-binance-spot": {
                "scaleMargins": {
                  "top": 0.52,
                  "bottom": 0.23
                },
                "indicators": [
                  "SPOT CVD"
                ]
              },
              "aggr-spot-delta": {
                "scaleMargins": {
                  "top": 0.78,
                  "bottom": 0.02
                },
                "indicators": [
                  "Spot Delta"
                ]
              },
              "cvd-btc-spot": {
                "scaleMargins": {
                  "top": 0.29,
                  "bottom": 0.37
                }
              },
              "cvdspot": {
                "scaleMargins": {
                  "top": 0.04,
                  "bottom": 0.52
                }
              }
            },
            "layouting": false,
            "showIndicators": true,
            "timeframe": "3600",
            "refreshRate": 1000,
            "showAlerts": true,
            "showAlertsLabel": true,
            "showLegend": true,
            "fillGapsWithEmpty": true,
            "showHorizontalGridlines": false,
            "horizontalGridlinesColor": "rgba(255,255,255,.1)",
            "showVerticalGridlines": false,
            "verticalGridlinesColor": "rgba(255,255,255,.1)",
            "showWatermark": true,
            "watermarkColor": "rgba(255,255,255,.1)",
            "showBorder": true,
            "borderColor": null,
            "showLeftScale": false,
            "showRightScale": true,
            "showTimeScale": true,
            "hiddenMarkets": {
              "BINANCE_FUTURES:btcbusd": false,
              "BINANCE_FUTURES:btcusd_perp": false,
              "BINANCE_FUTURES:btcusdt": false,
              "BITFINEX:BTCF0:USTF0": false,
              "BITMEX:XBT_USDT": false,
              "BITMEX:XBTUSD": false,
              "BITMEX:XBTUSDT": false,
              "BYBIT:BTCUSD": false,
              "BYBIT:BTCUSDT": false,
              "DERIBIT:BTC_USDC-PERPETUAL": false,
              "DERIBIT:BTC-PERPETUAL": false,
              "KRAKEN:PI_XBTUSD": false,
              "KUCOIN:XBTUSDM": false,
              "KUCOIN:XBTUSDTM": false,
              "MEXC:BTC_USD": false,
              "MEXC:BTC_USDT": false,
              "OKEX:BTC-USD-SWAP": false,
              "OKEX:BTC-USDC-SWAP": false,
              "OKEX:BTC-USDT-SWAP": false,
              "BINANCE:btcbusd": false,
              "BINANCE:btcusdc": false,
              "BINANCE:btcusdt": false,
              "BITFINEX:BTCUSD": false,
              "BITFINEX:BTCUST": false,
              "BITSTAMP:btcusd": false,
              "BITSTAMP:btcusdt": false,
              "BYBIT:BTCUSDC-SPOT": false,
              "BYBIT:BTCUSDT-SPOT": false,
              "COINBASE:BTC-USD": false,
              "COINBASE:BTC-USDT": false,
              "KRAKEN:XBT/USD": false,
              "KRAKEN:XBT/USDC": false,
              "KRAKEN:XBT/USDT": false,
              "KUCOIN:BTC-USDC": false,
              "KUCOIN:BTC-USDT": false,
              "MEXC:BTCUSDT": false,
              "OKEX:BTC-USDC": false,
              "OKEX:BTC-USDT": false
            },
            "barSpacing": 9.663643856510495
          },
          "markets": [
            "BINANCE_FUTURES:btcbusd",
            "BINANCE_FUTURES:btcusd_perp",
            "BINANCE_FUTURES:btcusdt",
            "BINANCE:btcbusd",
            "BINANCE:btcusdc",
            "BINANCE:btcusdt",
            "BITFINEX:BTCF0:USTF0",
            "BITFINEX:BTCUSD",
            "BITFINEX:BTCUST",
            "BITMEX:XBT_USDT",
            "BITMEX:XBTUSD",
            "BITMEX:XBTUSDT",
            "BITSTAMP:btcusd",
            "BITSTAMP:btcusdt",
            "BYBIT:BTCUSD",
            "BYBIT:BTCUSDC-SPOT",
            "BYBIT:BTCUSDT",
            "BYBIT:BTCUSDT-SPOT",
            "COINBASE:BTC-USD",
            "COINBASE:BTC-USDT",
            "DERIBIT:BTC_USDC-PERPETUAL",
            "DERIBIT:BTC-PERPETUAL",
            "KRAKEN:PI_XBTUSD",
            "KRAKEN:XBT/USD",
            "KRAKEN:XBT/USDC",
            "KRAKEN:XBT/USDT",
            "KUCOIN:BTC-USDC",
            "KUCOIN:BTC-USDT",
            "KUCOIN:XBTUSDM",
            "KUCOIN:XBTUSDTM",
            "MEXC:BTC_USD",
            "MEXC:BTC_USDT",
            "MEXC:BTCUSDT",
            "OKEX:BTC-USD-SWAP",
            "OKEX:BTC-USDC",
            "OKEX:BTC-USDC-SWAP",
            "OKEX:BTC-USDT",
            "OKEX:BTC-USDT-SWAP"
          ]
        }
      },
      "layout": [
        {
          "i": "chart",
          "type": "chart",
          "x": 12,
          "y": 0,
          "w": 12,
          "h": 24,
          "moved": false
        },
        {
          "i": "chart copy 1",
          "type": "chart",
          "w": 12,
          "h": 24,
          "y": 0,
          "x": 0,
          "moved": false
        }
      ]
    },
    "chart": {
      "indicatorsErrors": {},
      "indicators": {
        "allmarkets": {
          "script": "plotline(BITMEX:XBTUSD.close, color=blue, title=Bitmex.perp)\nplotline(BITFINEX:BTCF0:USTF0.close, color=red, title=Bitfinex.perp)\nplotline(OKEX:BTC-USD-SWAP.close, color=white, title=Okex.perp)\nplotline(BINANCE_FUTURES:btcusdt.close, color=yellow, title=Binance.USDT-perp)\nplotline(BINANCE_FUTURES:btcusd_perp.close, color=yellow, title=Binance.USD-perp)\nplotline(HUOBI:BTC-USD.close, color=rgb(238,3,83), title=Huobi.perp)\nplotline(KRAKEN:PI_XBTUSD.close, color=rgb(193,47,255), title=Kraken.perp)\nplotline(DERIBIT:BTC-PERPETUAL.close, color=aqua, title=Deribit.perp)\nplotline(BYBIT:BTCUSDT.close, color=rgb(20,185,26), title=Bybit.USDT.perp)",
          "description": "Multiple markets at once",
          "name": "All markets",
          "options": {
            "priceScaleId": "right",
            "spotColor": "#81c784",
            "futuresColor": "#ec407a",
            "lastValueVisible": true,
            "priceLineVisible": false,
            "baseLineVisible": false,
            "scaleMargins": {
              "top": 0.04,
              "bottom": 0.54
            },
            "color": "rgb(215,90,133)"
          },
          "id": "allmarkets",
          "createdAt": 1673293819993,
          "updatedAt": 1696451920053,
          "uses": 1,
          "unsavedChanges": true,
          "optionsDefinitions": {},
          "series": [
            "allmarkets",
            "8gw0czl8",
            "3rxlyk9a",
            "3jbvu5a7",
            "stwe8x48",
            "nopbkvij",
            "9xgt36ar",
            "nhvvsgkw",
            "tq9gi2eg"
          ],
          "displayName": "All markets"
        },
        "binance-perp-cvd": {
          "script": "line(cum((BINANCE_FUTURES:btcbusd.vbuy+BINANCE_FUTURES:btcusd_perp.vbuy+BINANCE_FUTURES:btcusdt.vbuy)-(BINANCE_FUTURES:btcbusd.vsell+BINANCE_FUTURES:btcusd_perp.vsell+BINANCE_FUTURES:btcusdt.vsell)), title=BINANCE PERP CVD)",
          "id": "binance-perp-cvd",
          "name": "BINANCE PERP CVD",
          "options": {
            "priceScaleId": "cvd-btc-binance-spot",
            "color": "rgb(220,34,50)",
            "lineStyle": 0,
            "lineWidth": 1,
            "visible": true,
            "scaleMargins": {
              "top": 0.47,
              "bottom": 0.23
            },
            "priceFormat": {
              "type": "volume",
              "precision": 2,
              "minMove": 0.01,
              "auto": false
            },
            "lastValueVisible": true
          },
          "description": null,
          "unsavedChanges": true,
          "series": [
            "binance-perp-cvd"
          ],
          "displayName": "BINANCE PERP CVD",
          "createdAt": 1657347988177,
          "navigationState": {
            "sections": [
              "position",
              "colors",
              "defaultOptions",
              "format"
            ],
            "tab": "#script",
            "optionsQuery": "",
            "fontSize": 1
          },
          "updatedAt": 1686941087037,
          "preview": {},
          "optionsDefinitions": {}
        },
        "bybit-perp-cvd": {
          "script": "line(cum((BYBIT:BTCUSD.vbuy+BYBIT:BTCUSDT.vbuy)-(BYBIT:BTCUSD.vsell+BYBIT:BTCUSDT.vsell)), title=BYBIT PERP CVD)",
          "id": "bybit-perp-cvd",
          "name": "BYBIT PERP CVD",
          "options": {
            "priceScaleId": "cvd-btc-binance-spot",
            "color": "rgb(20,185,26)",
            "lineStyle": 0,
            "lineWidth": 1,
            "visible": true,
            "scaleMargins": {
              "top": 0.47,
              "bottom": 0.23
            },
            "priceFormat": {
              "type": "volume",
              "precision": 2,
              "minMove": 0.01,
              "auto": false
            },
            "lastValueVisible": true
          },
          "description": null,
          "unsavedChanges": true,
          "series": [
            "bybit-perp-cvd"
          ],
          "displayName": "BYBIT PERP CVD",
          "navigationState": {
            "sections": [
              "position",
              "colors",
              "defaultOptions",
              "format"
            ],
            "tab": "#script",
            "optionsQuery": "",
            "fontSize": 1
          },
          "preview": {},
          "optionsDefinitions": {}
        },
        "okex-perp-cvd": {
          "script": "line(cum((OKEX:BTC-USD-SWAP.vbuy+OKEX:BTC-USDT-SWAP.vbuy+OKEX:BTC-USDC-SWAP.vbuy)-(OKEX:BTC-USD-SWAP.vsell+OKEX:BTC-USDT-SWAP.vsell+OKEX:BTC-USDC-SWAP.vsell)), title=OKEX PERP CVD)",
          "id": "okex-perp-cvd",
          "name": "OKEX PERP CVD ",
          "options": {
            "priceScaleId": "cvd-btc-binance-spot",
            "color": "rgb(255,255,255)",
            "lineStyle": 0,
            "lineWidth": 1,
            "visible": true,
            "scaleMargins": {
              "top": 0.47,
              "bottom": 0.23
            },
            "priceFormat": {
              "type": "volume",
              "precision": 2,
              "minMove": 0.01,
              "auto": false
            },
            "lastValueVisible": true
          },
          "description": null,
          "unsavedChanges": false,
          "series": [
            "okex-perp-cvd"
          ],
          "displayName": "OKEX PERP CVD ",
          "navigationState": {
            "sections": [
              "position",
              "colors",
              "defaultOptions",
              "format"
            ],
            "tab": "#script",
            "optionsQuery": "",
            "fontSize": 1
          },
          "preview": {},
          "optionsDefinitions": {}
        },
        "perp-cvd": {
          "script": "line(cum((BINANCE_FUTURES:btcusdt.vbuy+BINANCE_FUTURES:btcusd_perp.vbuy+BITFINEX:BTCF0:USTF0.vbuy+BITMEX:XBTUSD.vbuy+BYBIT:BTCUSD.vbuy+BYBIT:BTCUSDT.vbuy+DERIBIT:BTC-PERPETUAL.vbuy+FTX:BTC-PERP.vbuy+HUOBI:BTC-USD.vbuy+KRAKEN:PI_XBTUSD.vbuy+OKEX:BTC-USDT-SWAP.vbuy+OKEX:BTC-USD-SWAP.vbuy)- (BINANCE_FUTURES:btcusdt.vsell+BINANCE_FUTURES:btcusd_perp.vsell+BITFINEX:BTCF0:USTF0.vsell+BITMEX:XBTUSD.vsell+BYBIT:BTCUSD.vsell+BYBIT:BTCUSDT.vsell+DERIBIT:BTC-PERPETUAL.vsell+FTX:BTC-PERP.vsell+HUOBI:BTC-USD.vsell+KRAKEN:PI_XBTUSD.vsell+OKEX:BTC-USDT-SWAP.vsell+OKEX:BTC-USD-SWAP.vsell)), title=PERP CVD)",
          "name": "PERP CVD",
          "description": "CVD specific markets",
          "options": {
            "priceScaleId": "cvd-btc-binance-spot",
            "priceFormat": {
              "type": "volume"
            },
            "color": "rgb(41,98,255)",
            "visible": true,
            "scaleMargins": {
              "top": 0.47,
              "bottom": 0.23
            },
            "lastValueVisible": true
          },
          "id": "perp-cvd",
          "createdAt": 1673293819993,
          "updatedAt": 1696454583183,
          "uses": 1,
          "series": [
            "perp-cvd"
          ],
          "displayName": "PERP CVD",
          "optionsDefinitions": {},
          "unsavedChanges": true
        },
        "perp-delta": {
          "script": "_vbuy = (BINANCE_FUTURES:btcusd_perp.vbuy+BINANCE_FUTURES:btcusdt.vbuy+BINANCE_FUTURES:btcbusd.vbuy+BITMEX:XBTUSD.vbuy+BYBIT:BTCUSD.vbuy+DERIBIT:BTC-PERPETUAL.vbuy+BITFINEX:BTCFO:USTFO.vbuy+BITMEX:XBTUSDT.vbuy+BYBIT:BTCUSDT.vbuy+KRAKEN:PI_XBTUSD.vbuy+OKEX:BTC-USD-SWAP.vbuy+OKEX:BTC-USDT-SWAP.vbuy)\n_vsell = (BINANCE_FUTURES:btcusd_perp.vsell+BINANCE_FUTURES:btcusdt.vsell+BINANCE_FUTURES:btcbusd.vsell+BITMEX:XBTUSD.vsell+BYBIT:BTCUSD.vsell+DERIBIT:BTC-PERPETUAL.vsell+BITFINEX:BTCFO:USTFO.vsell+BITMEX:XBTUSDT.vsell+BYBIT:BTCUSDT.vsell+KRAKEN:PI_XBTUSD.vsell+OKEX:BTC-USD-SWAP.vsell+OKEX:BTC-USDT-SWAP.vsell)\n\nvolume = _vbuy+_vsell\na = sma(Math.pow(volume,2),options.length)\nb = Math.pow(sum(volume,options.length),2)/Math.pow(options.length,2)\nstdev = Math.sqrt(a - b)\nbasis = sma(volume, options.length)\ndev = 1 * stdev\ntreshold = basis + dev\n\ndelta = _vbuy - _vsell\n\nplothistogram({ time: time, value: (delta), color: delta > 0 ? ( volume > treshold ? options.upColorHighVol : options.upColorLowVol) : ( volume > treshold ? options.downColorHighVol : options.downColorLowVol)}, title=\"Perp Delta\")",
          "id": "perp-delta",
          "name": "PERP DELTA",
          "options": {
            "priceScaleId": "delta-stable-perp-aggr",
            "upColor": "rgb(100,181,246)",
            "downColor": "rgb(236,64,122)",
            "visible": true,
            "upColorLowVol": "rgb(31,106,34)",
            "downColorLowVol": "rgb(108,17,24)",
            "upColorHighVol": "rgb(109,223,113)",
            "downColorHighVol": "rgb(220,34,50)",
            "length": 14,
            "scaleMargins": {
              "top": 0.78,
              "bottom": 0.02
            },
            "priceFormat": {
              "type": "volume",
              "precision": 2,
              "minMove": 0.01,
              "auto": false
            },
            "lastValueVisible": true
          },
          "description": null,
          "unsavedChanges": true,
          "series": [
            "perp-delta"
          ],
          "displayName": "PERP DELTA",
          "createdAt": 1657705213969,
          "updatedAt": 1696454587418,
          "navigationState": {
            "sections": [
              "colors",
              "format",
              "defaultOptions"
            ],
            "tab": 0,
            "optionsQuery": "",
            "fontSize": 1
          },
          "preview": {},
          "optionsDefinitions": {}
        },
        "liquidations": {
          "script": "plotline(lbuy, color=options.upColor)\nplotline(-lsell, color=options.downColor)",
          "enabled": true,
          "name": "Liquidations",
          "description": "Liquidations by side",
          "options": {
            "priceScaleId": "liquidations",
            "priceFormat": {
              "type": "price",
              "precision": 2,
              "minMove": 0.01,
              "auto": false
            },
            "upColor": "rgb(214,40,40)",
            "downColor": "rgb(37,205,18)",
            "scaleMargins": {
              "top": 0,
              "bottom": 0.96
            },
            "lastValueVisible": false,
            "visible": true,
            "priceLineVisible": false,
            "baseLineVisible": false
          },
          "id": "liquidations",
          "createdAt": 1657349169744,
          "updatedAt": 1696550342566,
          "unsavedChanges": true,
          "series": [
            "liquidations copy 5",
            "14nk5maw"
          ],
          "displayName": "Liquidations",
          "navigationState": {
            "sections": [
              "position",
              "colors",
              "defaultOptions",
              "format"
            ],
            "tab": "#options",
            "optionsQuery": "",
            "fontSize": 1
          },
          "uses": 1,
          "preview": {},
          "optionsDefinitions": {}
        }
      },
      "priceScales": {
        "right": {
          "scaleMargins": {
            "top": 0.04,
            "bottom": 0.54
          },
          "priceFormat": {
            "precision": 1,
            "minMove": 0.1
          },
          "indicators": [
            "All markets"
          ]
        },
        "cvd": {
          "scaleMargins": {
            "top": 0.84,
            "bottom": 0
          }
        },
        "liquidations": {
          "scaleMargins": {
            "top": 0,
            "bottom": 0.96
          },
          "indicators": [
            "Liquidations"
          ]
        },
        "volume": {
          "scaleMargins": {
            "top": 0.84,
            "bottom": 0
          }
        },
        "cvd-btc-binance-spot": {
          "scaleMargins": {
            "top": 0.47,
            "bottom": 0.23
          },
          "indicators": [
            "BINANCE PERP CVD"
          ]
        },
        "aggr-spot-delta": {
          "scaleMargins": {
            "top": 0.78,
            "bottom": 0.02
          },
          "indicators": [
            "Spot Delta"
          ]
        },
        "cvd-btc-spot": {
          "scaleMargins": {
            "top": 0.29,
            "bottom": 0.37
          }
        },
        "cvdspot": {
          "scaleMargins": {
            "top": 0.04,
            "bottom": 0.52
          }
        },
        "cvdperp": {
          "scaleMargins": {
            "top": 0.04,
            "bottom": 0.52
          }
        },
        "delta-stable-perp-aggr": {
          "scaleMargins": {
            "top": 0.78,
            "bottom": 0.02
          },
          "indicators": [
            "PERP DELTA"
          ]
        },
        "perp-delta-copy-1": {
          "scaleMargins": {
            "top": 0.78,
            "bottom": 0.02
          }
        }
      },
      "layouting": false,
      "showIndicators": false,
      "timeframe": "3600",
      "refreshRate": 1000,
      "showAlerts": true,
      "showAlertsLabel": true,
      "showLegend": true,
      "fillGapsWithEmpty": true,
      "showHorizontalGridlines": false,
      "horizontalGridlinesColor": "rgba(255,255,255,.1)",
      "showVerticalGridlines": false,
      "verticalGridlinesColor": "rgba(255,255,255,.1)",
      "showWatermark": true,
      "watermarkColor": "rgba(255,255,255,.1)",
      "showBorder": true,
      "borderColor": null,
      "showLeftScale": false,
      "showRightScale": true,
      "showTimeScale": true,
      "hiddenMarkets": {
        "BINANCE:btcbusd": true,
        "BINANCE:btcusdc": true,
        "BINANCE:btcusdt": true,
        "BITFINEX:BTCUSD": true,
        "BITFINEX:BTCUST": true,
        "BITSTAMP:btcusd": true,
        "BITSTAMP:btcusdt": true,
        "BYBIT:BTCUSDC-SPOT": true,
        "BYBIT:BTCUSDT-SPOT": true,
        "COINBASE:BTC-USD": true,
        "COINBASE:BTC-USDT": true,
        "KRAKEN:XBT/USD": true,
        "KRAKEN:XBT/USDC": true,
        "KRAKEN:XBT/USDT": true,
        "KUCOIN:BTC-USDC": true,
        "KUCOIN:BTC-USDT": true,
        "MEXC:BTCUSDT": true,
        "OKEX:BTC-USDC": true,
        "OKEX:BTC-USDT": true
      },
      "barSpacing": 9.307633849283299,
      "_id": "chart"
    },
    "settings": {
      "_id": "settings",
      "preferQuoteCurrencySize": true,
      "aggregationLength": 1,
      "calculateSlippage": null,
      "wsProxyUrl": null,
      "disableAnimations": false,
      "autoHideHeaders": true,
      "autoHideNames": true,
      "theme": "dark",
      "backgroundColor": "rgb(23,27,41)",
      "textColor": "",
      "buyColor": "rgb(100, 157, 102)",
      "sellColor": "rgb(239, 67, 82)",
      "timezoneOffset": 0,
      "useAudio": false,
      "audioVolume": 1,
      "audioFilters": {
        "PingPongDelay": true,
        "Compressor": false,
        "Delay": false,
        "HighPassFilter": true,
        "LowPassFilter": false
      },
      "sections": [
        "settings-workspaces",
        "settings-trades",
        "timeframe-minutes",
        "search-type",
        "indicator-left-colors",
        "indicator-left-other",
        "timeframe-hours",
        "indicator-right-colors"
      ],
      "searchTypes": {
        "recentSearches": true,
        "historical": true,
        "spots": true,
        "perpetuals": true,
        "futures": true,
        "normalize": true,
        "mergeUsdt": true
      },
      "searchQuotes": {},
      "previousSearchSelections": [
        {
          "label": "BTCUSD",
          "markets": [
            "BINANCE_FUTURES:btcbusd",
            "BINANCE_FUTURES:btcusd_perp",
            "BINANCE_FUTURES:btcusdt",
            "BINANCE:btcbusd",
            "BINANCE:btcusdc",
            "BINANCE:btcusdt",
            "BITFINEX:BTCF0:USTF0",
            "BITFINEX:BTCUSD",
            "BITFINEX:BTCUST",
            "BITMEX:XBT_USDT",
            "BITMEX:XBTUSD",
            "BITMEX:XBTUSDT",
            "BITSTAMP:btcusd",
            "BITSTAMP:btcusdt",
            "BYBIT:BTCUSD",
            "BYBIT:BTCUSDC-SPOT",
            "BYBIT:BTCUSDT",
            "BYBIT:BTCUSDT-SPOT",
            "COINBASE:BTC-USD",
            "COINBASE:BTC-USDT",
            "DERIBIT:BTC_USDC-PERPETUAL",
            "DERIBIT:BTC-PERPETUAL",
            "KRAKEN:PI_XBTUSD",
            "KRAKEN:XBT/USD",
            "KRAKEN:XBT/USDC",
            "KRAKEN:XBT/USDT",
            "KUCOIN:BTC-USDC",
            "KUCOIN:BTC-USDT",
            "KUCOIN:XBTUSDM",
            "KUCOIN:XBTUSDTM",
            "MEXC:BTC_USD",
            "MEXC:BTC_USDT",
            "MEXC:BTCUSDT",
            "OKEX:BTC-USD-SWAP",
            "OKEX:BTC-USDC",
            "OKEX:BTC-USDC-SWAP",
            "OKEX:BTC-USDT",
            "OKEX:BTC-USDT-SWAP"
          ],
          "count": 38
        },
        {
          "label": "BTCUSD",
          "markets": [
            "BINANCE_FUTURES:btcbusd",
            "BINANCE_FUTURES:btcusd_perp",
            "BINANCE_FUTURES:btcusdt",
            "BINANCE:btcbusd",
            "BINANCE:btcusdt",
            "BITFINEX:BTCF0:USTF0",
            "BITFINEX:BTCUSD",
            "BITFINEX:BTCUST",
            "BITMEX:XBTUSD",
            "BITMEX:XBTUSDT",
            "BITSTAMP:btcusd",
            "BYBIT:BTCUSD",
            "BYBIT:BTCUSDT",
            "COINBASE:BTC-USD",
            "COINBASE:BTC-USDT",
            "DERIBIT:BTC-PERPETUAL",
            "KRAKEN:PI_XBTUSD",
            "OKEX:BTC-USD-SWAP",
            "OKEX:BTC-USDT-SWAP"
          ],
          "count": 19
        }
      ],
      "searchExchanges": {
        "UNISWAP": false
      },
      "timeframes": [
        {
          "label": "1s",
          "value": "1"
        },
        {
          "label": "3s",
          "value": "3"
        },
        {
          "label": "5s",
          "value": "5"
        },
        {
          "label": "10s",
          "value": "10"
        },
        {
          "label": "15s",
          "value": "15"
        },
        {
          "label": "30s",
          "value": "30"
        },
        {
          "label": "1m",
          "value": "60"
        },
        {
          "label": "3m",
          "value": "180"
        },
        {
          "label": "5m",
          "value": "300"
        },
        {
          "label": "15m",
          "value": "900"
        },
        {
          "label": "21m",
          "value": "1260"
        },
        {
          "label": "30m",
          "value": "1800"
        },
        {
          "label": "1h",
          "value": "3600"
        },
        {
          "label": "2h",
          "value": "7200"
        },
        {
          "label": "4h",
          "value": "14400"
        },
        {
          "label": "6h",
          "value": "21600"
        },
        {
          "label": "8h",
          "value": "28800"
        },
        {
          "label": "12h",
          "value": "43200"
        },
        {
          "label": "1d",
          "value": "86400"
        },
        {
          "label": "21 ticks",
          "value": "21t"
        },
        {
          "label": "50 ticks",
          "value": "50t"
        },
        {
          "label": "89 ticks",
          "value": "89t"
        },
        {
          "label": "100 ticks",
          "value": "100t"
        },
        {
          "label": "200 ticks",
          "value": "200t"
        },
        {
          "label": "610 ticks",
          "value": "610t"
        },
        {
          "label": "1000 ticks",
          "value": "1000t"
        },
        {
          "label": "1597 ticks",
          "value": "1597t"
        }
      ],
      "favoriteTimeframes": {},
      "normalizeWatermarks": true,
      "alerts": false,
      "alertsColor": "rgb(255,0,0)",
      "alertsLineStyle": 2,
      "alertsLineWidth": 2,
      "alertsClick": false,
      "alertSound": null,
      "showThresholdsAsTable": true
    },
    "chart copy 1": {
      "indicatorsErrors": {},
      "indicators": {
        "binance-spot-cvd": {
          "script": "line(cum((BINANCE:btcbusd.vbuy+BINANCE:btcusdc.vbuy+BINANCE:btcusdt.vbuy)-(BINANCE:btcbusd.vsell+BINANCE:btcusdc.vsell+BINANCE:btcusdt.vsell)), title=BINANCE SPOT CVD)",
          "id": "binance-spot-cvd",
          "name": "Binance Spot CVD",
          "options": {
            "priceScaleId": "cvd-btc-binance-spot",
            "color": "rgb(220,34,50)",
            "lineStyle": 0,
            "lineWidth": 1,
            "visible": true,
            "scaleMargins": {
              "top": 0.47,
              "bottom": 0.23
            },
            "priceFormat": {
              "type": "volume",
              "precision": 2,
              "minMove": 0.01,
              "auto": false
            },
            "lastValueVisible": true
          },
          "description": null,
          "unsavedChanges": true,
          "series": [
            "binance-spot-cvd"
          ],
          "displayName": "Binance Spot CVD",
          "createdAt": 1657347988177,
          "navigationState": {
            "sections": [
              "position",
              "colors",
              "defaultOptions",
              "format"
            ],
            "tab": "#script",
            "optionsQuery": "",
            "fontSize": 1
          },
          "updatedAt": 1686941087037,
          "preview": {},
          "optionsDefinitions": {}
        },
        "bybit-spot-cvd": {
          "script": "line(cum((BYBIT:BTCUSDC-SPOT.vbuy+BYBIT:BTCUSDT-SPOT.vbuy)-(BYBIT:BTCUSDC-SPOT.vsell+BYBIT:BTCUSDT-SPOT.vsell)), title=BYBIT SPOT CVD)",
          "id": "bybit-spot-cvd",
          "name": "BYBIT SPOT CVD",
          "options": {
            "priceScaleId": "cvd-btc-binance-spot",
            "color": "rgb(20,185,26)",
            "lineStyle": 0,
            "lineWidth": 1,
            "visible": true,
            "scaleMargins": {
              "top": 0.47,
              "bottom": 0.23
            },
            "priceFormat": {
              "type": "volume",
              "precision": 2,
              "minMove": 0.01,
              "auto": false
            },
            "lastValueVisible": true
          },
          "description": null,
          "unsavedChanges": true,
          "series": [
            "bybit-spot-cvd"
          ],
          "displayName": "BYBIT SPOT CVD",
          "navigationState": {
            "sections": [
              "position",
              "colors",
              "defaultOptions",
              "format"
            ],
            "tab": "#script",
            "optionsQuery": "",
            "fontSize": 1
          },
          "preview": {},
          "optionsDefinitions": {}
        },
        "okex-spot-cvd": {
          "script": "line(cum((OKEX:BTC-USDC.vbuy+OKEX:BTC-USDT.vbuy)-(OKEX:BTC-USDC.vsell+OKEX:BTC-USDT.vsell)), title=OKEX SPOT CVD)",
          "id": "okex-spot-cvd",
          "name": "OKEX SPOT CVD ",
          "options": {
            "priceScaleId": "cvd-btc-binance-spot",
            "color": "rgb(255,255,255)",
            "lineStyle": 0,
            "lineWidth": 1,
            "visible": true,
            "scaleMargins": {
              "top": 0.47,
              "bottom": 0.23
            },
            "priceFormat": {
              "type": "volume",
              "precision": 2,
              "minMove": 0.01,
              "auto": false
            },
            "lastValueVisible": true
          },
          "description": null,
          "unsavedChanges": true,
          "series": [
            "okex-spot-cvd"
          ],
          "displayName": "OKEX SPOT CVD ",
          "navigationState": {
            "sections": [
              "position",
              "colors",
              "defaultOptions",
              "format"
            ],
            "tab": "#script",
            "optionsQuery": "",
            "fontSize": 1
          },
          "preview": {},
          "optionsDefinitions": {}
        },
        "allmarkets": {
          "script": "plotline(BITFINEX:BTCUSD.close, color=red, title=Bitfinex.spot)\nplotline(BINANCE:btcusdt.close, color=rgb(255,231,20), title=Binance.spot)\nplotline(OKEX:BTC-USDT.close, color=white, title=Okex.spot)\nplotline(KRAKEN:XBT/USD.close, color=rgb(193,47,255), title=Kraken.spot)\nplotline(COINBASE:BTC-USD.close, color=blue, title=Coinbase.spot)\nplotline(BITSTAMP:btcusd.close, color=rgb(215,90,133), title=Bitstamp.spot)\nplotline(BYBIT:BTCUSDT-SPOT.close, color=rgb(20,185,26), title=Bybit.spot)",
          "description": "Multiple markets at once",
          "name": "All markets",
          "options": {
            "priceScaleId": "right",
            "spotColor": "#81c784",
            "futuresColor": "#ec407a",
            "lastValueVisible": true,
            "priceLineVisible": false,
            "baseLineVisible": false,
            "scaleMargins": {
              "top": 0.04,
              "bottom": 0.54
            },
            "color": "rgb(215,90,133)"
          },
          "id": "allmarkets",
          "createdAt": 1673293819993,
          "updatedAt": 1696451920053,
          "uses": 1,
          "unsavedChanges": true,
          "optionsDefinitions": {},
          "series": [
            "allmarkets",
            "xcnku4el",
            "203pzuj7",
            "kkj5tz2b",
            "2jmrtz1a",
            "mh3hqybo",
            "17xmol60"
          ],
          "displayName": "All markets"
        },
        "spot-delta": {
          "script": "_vbuy = (BINANCE:btcusdt.vbuy+COINBASE:BTC-USD.vbuy+BITFINEX:BTCUSD.vbuy+BINANCE:btcbusd.vbuy+BITFINEX:BTCUST.vbuy+COINBASE:BTC-USDT.vbuy+BITSTAMP:btcusd.vbuy)\n_vsell = (BINANCE:btcusdt.vsell+COINBASE:BTC-USD.vsell+BITFINEX:BTCUSD.vsell+BINANCE:btcbusd.vsell+BITFINEX:BTCUST.vsell+COINBASE:BTC-USDT.vsell+BITSTAMP:btcusd.vsell)\n\nvolume = _vbuy+_vsell\na = sma(Math.pow(volume,2),options.length)\nb = Math.pow(sum(volume,options.length),2)/Math.pow(options.length,2)\nstdev = Math.sqrt(a - b)\nbasis = sma(volume, options.length)\ndev = 1 * stdev\ntreshold = basis + dev\n\ndelta = _vbuy - _vsell\n\nplothistogram({ time: time, value: (delta), color: delta > 0 ? ( volume > treshold ? options.upColorHighVol : options.upColorLowVol) : ( volume > treshold ? options.downColorHighVol : options.downColorLowVol)}, title=\"Spot Delta\")",
          "id": "spot-delta",
          "name": "Spot Delta",
          "options": {
            "priceScaleId": "aggr-spot-delta",
            "upColor": "rgb(100,181,246)",
            "downColor": "rgb(236,64,122)",
            "visible": true,
            "upColorLowVol": "rgb(31,106,34)",
            "downColorLowVol": "rgb(108,17,24)",
            "upColorHighVol": "rgb(109,223,113)",
            "downColorHighVol": "rgb(220,34,50)",
            "length": 14,
            "scaleMargins": {
              "top": 0.78,
              "bottom": 0.02
            },
            "priceFormat": {
              "type": "volume",
              "precision": 2,
              "minMove": 0.01,
              "auto": false
            },
            "lastValueVisible": true
          },
          "description": null,
          "unsavedChanges": false,
          "series": [
            "spot-delta"
          ],
          "displayName": "Spot Delta",
          "createdAt": 1657704764440,
          "navigationState": {
            "sections": [
              "position",
              "colors",
              "format",
              "defaultOptions"
            ],
            "tab": 0,
            "optionsQuery": "",
            "fontSize": 1
          },
          "updatedAt": 1696452184905,
          "preview": {},
          "optionsDefinitions": {}
        },
        "spot-cvd": {
          "script": "line(cum((BINANCE:btcusdt.vbuy+BINANCE:btcusdc.vbuy+BITFINEX:BTCUSD.vbuy+BITSTAMP:btcusd.vbuy+BITSTAMP:btcusdt.vbuy+BITSTAMP:btcusdc.vbuy+COINBASE:BTC-USDC.vbuy+COINBASE:BTC-USD.vbuy+COINBASE:BTC-USDT.vbuy+FTX:BTC/USD.vbuy+FTX:BTC/USDT.vbuy+HUOBI:btcusdt.vbuy+HUOBI:btcusdc.vbuy+KRAKEN:XBT/USDC.vbuy+KRAKEN:XBT/USDT.vbuy+KRAKEN:XBT/USD.vbuy+OKEX:BTC-USDT.vbuy+OKEX:BTC-USDC.vbuy+POLONIEX:BTC_USDT.vbuy+POLONIEX:USDC_BTC.vbuy)-(BINANCE:btcusdt.vsell+BINANCE:btcusdc.vsell+BITFINEX:BTCUSD.vsell+BITSTAMP:btcusd.vsell+BITSTAMP:btcusdt.vsell+BITSTAMP:btcusdc.vsell+COINBASE:BTC-USDC.vsell+COINBASE:BTC-USD.vsell+COINBASE:BTC-USDT.vsell+FTX:BTC/USD.vsell+FTX:BTC/USDT.vsell+HUOBI:btcusdt.vsell+HUOBI:btcusdc.vsell+KRAKEN:XBT/USDC.vsell+KRAKEN:XBT/USDT.vsell+KRAKEN:XBT/USD.vsell+OKEX:BTC-USDT.vsell+OKEX:BTC-USDC.vsell+POLONIEX:BTC_USDT.vsell+POLONIEX:USDC_BTC.vsell)), title=SPOT CVD)",
          "name": "SPOT CVD",
          "description": "CVD specific markets",
          "options": {
            "priceScaleId": "cvd-btc-binance-spot",
            "priceFormat": {
              "type": "volume"
            },
            "color": "rgb(24,72,204)",
            "visible": true,
            "scaleMargins": {
              "top": 0.47,
              "bottom": 0.23
            },
            "lastValueVisible": true
          },
          "id": "spot-cvd",
          "createdAt": 1673293819993,
          "updatedAt": 1696452450915,
          "uses": 1,
          "unsavedChanges": true,
          "series": [
            "spot-cvd"
          ],
          "displayName": "SPOT CVD",
          "optionsDefinitions": {}
        }
      },
      "priceScales": {
        "right": {
          "scaleMargins": {
            "top": 0.04,
            "bottom": 0.54
          },
          "priceFormat": {
            "precision": 1,
            "minMove": 0.1
          },
          "indicators": [
            "All markets"
          ]
        },
        "cvd": {
          "scaleMargins": {
            "top": 0.84,
            "bottom": 0
          }
        },
        "liquidations": {
          "scaleMargins": {
            "top": 0.07,
            "bottom": 0.85
          },
          "indicators": [
            "Liquidations"
          ]
        },
        "volume": {
          "scaleMargins": {
            "top": 0.84,
            "bottom": 0
          }
        },
        "cvd-btc-binance-spot": {
          "scaleMargins": {
            "top": 0.47,
            "bottom": 0.23
          },
          "indicators": [
            "Binance Spot CVD"
          ]
        },
        "aggr-spot-delta": {
          "scaleMargins": {
            "top": 0.78,
            "bottom": 0.02
          },
          "indicators": [
            "Spot Delta"
          ]
        },
        "cvd-btc-spot": {
          "scaleMargins": {
            "top": 0.29,
            "bottom": 0.37
          }
        },
        "cvdspot": {
          "scaleMargins": {
            "top": 0.04,
            "bottom": 0.52
          }
        }
      },
      "layouting": false,
      "showIndicators": false,
      "timeframe": "3600",
      "refreshRate": 1000,
      "showAlerts": true,
      "showAlertsLabel": true,
      "showLegend": true,
      "fillGapsWithEmpty": true,
      "showHorizontalGridlines": false,
      "horizontalGridlinesColor": "rgba(255,255,255,.1)",
      "showVerticalGridlines": false,
      "verticalGridlinesColor": "rgba(255,255,255,.1)",
      "showWatermark": true,
      "watermarkColor": "rgba(255,255,255,.1)",
      "showBorder": true,
      "borderColor": null,
      "showLeftScale": false,
      "showRightScale": true,
      "showTimeScale": true,
      "hiddenMarkets": {
        "BINANCE_FUTURES:btcbusd": true,
        "BINANCE_FUTURES:btcusd_perp": true,
        "BINANCE_FUTURES:btcusdt": true,
        "BITFINEX:BTCF0:USTF0": true,
        "BITMEX:XBT_USDT": true,
        "BITMEX:XBTUSD": true,
        "BITMEX:XBTUSDT": true,
        "BYBIT:BTCUSD": true,
        "BYBIT:BTCUSDT": true,
        "DERIBIT:BTC_USDC-PERPETUAL": true,
        "DERIBIT:BTC-PERPETUAL": true,
        "KRAKEN:PI_XBTUSD": true,
        "KUCOIN:XBTUSDM": true,
        "KUCOIN:XBTUSDTM": true,
        "MEXC:BTC_USD": true,
        "MEXC:BTC_USDT": true,
        "OKEX:BTC-USD-SWAP": true,
        "OKEX:BTC-USDC-SWAP": true,
        "OKEX:BTC-USDT-SWAP": true,
        "BINANCE:btcbusd": false,
        "BINANCE:btcusdc": false,
        "BINANCE:btcusdt": false,
        "BITFINEX:BTCUSD": false,
        "BITFINEX:BTCUST": false,
        "BITSTAMP:btcusd": false,
        "BITSTAMP:btcusdt": false,
        "BYBIT:BTCUSDC-SPOT": false,
        "BYBIT:BTCUSDT-SPOT": false,
        "COINBASE:BTC-USD": false,
        "COINBASE:BTC-USDT": false,
        "KRAKEN:XBT/USD": false,
        "KRAKEN:XBT/USDC": false,
        "KRAKEN:XBT/USDT": false,
        "KUCOIN:BTC-USDC": false,
        "KUCOIN:BTC-USDT": false,
        "MEXC:BTCUSDT": false,
        "OKEX:BTC-USDC": false,
        "OKEX:BTC-USDT": false
      },
      "barSpacing": 9.581508965466648,
      "_id": "chart copy 1"
    }
  }
}

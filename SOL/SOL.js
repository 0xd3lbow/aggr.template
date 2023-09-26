{
  "version": 7,
  "name": "SOL",
  "id": "sol",
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
            "BINANCE_FUTURES:solusd_perp",
            "BINANCE_FUTURES:solusdt",
            "BINANCE:solusdt",
            "BITFINEX:SOLF0:USTF0",
            "BITFINEX:SOLUSD",
            "BITFINEX:SOLUST",
            "BITGET:SOLUSDC",
            "BITGET:SOLUSDT",
            "BITGET:SOLUSDT_UMCBL",
            "BITMEX:SOLUSD",
            "BITMEX:SOLUSDT",
            "BYBIT:SOLUSDT",
            "COINBASE:SOL-USD",
            "COINBASE:SOL-USDT",
            "DERIBIT:SOL_USDC-PERPETUAL",
            "KRAKEN:SOL/USD",
            "OKEX:SOL-USDT",
            "OKEX:SOL-USDT-SWAP"
          ],
          "zoom": 1.25
        },
        "trades": {
          "id": "trades",
          "name": "",
          "type": "trades",
          "markets": [
            "BINANCE_FUTURES:solusd_perp",
            "BINANCE_FUTURES:solusdt",
            "BINANCE:solusdt",
            "BITFINEX:SOLF0:USTF0",
            "BITFINEX:SOLUSD",
            "BITFINEX:SOLUST",
            "BITGET:SOLUSDC",
            "BITGET:SOLUSDT",
            "BITGET:SOLUSDT_UMCBL",
            "BITMEX:SOLUSD",
            "BITMEX:SOLUSDT",
            "BYBIT:SOLUSDT",
            "COINBASE:SOL-USD",
            "COINBASE:SOL-USDT",
            "DERIBIT:SOL_USDC-PERPETUAL",
            "KRAKEN:SOL/USD",
            "OKEX:SOL-USDT",
            "OKEX:SOL-USDT-SWAP"
          ],
          "settings": {
            "tradeType": "trades",
            "thresholds": [
              {
                "amount": 100000
              }
            ],
            "liquidations": {
              "amount": 50000
            }
          },
          "zoom": 1.25
        },
        "chart copy 1": {
          "id": "chart copy 1",
          "name": "",
          "type": "chart",
          "markets": [
            "BINANCE:solusdt",
            "BITFINEX:SOLUSD",
            "BITFINEX:SOLUST",
            "BITGET:SOLUSDC",
            "BITGET:SOLUSDT",
            "COINBASE:SOL-USD",
            "COINBASE:SOL-USDT",
            "KRAKEN:SOL/USD",
            "OKEX:SOL-USDT"
          ]
        },
        "chart copy 2": {
          "id": "chart copy 2",
          "name": "",
          "type": "chart",
          "markets": [
            "BINANCE_FUTURES:solusd_perp",
            "BINANCE_FUTURES:solusdt",
            "BITFINEX:SOLF0:USTF0",
            "BITGET:SOLUSDT_UMCBL",
            "BITMEX:SOLUSD",
            "BITMEX:SOLUSDT",
            "BYBIT:SOLUSDT",
            "DERIBIT:SOL_USDC-PERPETUAL",
            "OKEX:SOL-USDT-SWAP"
          ]
        }
      },
      "layout": [
        {
          "i": "chart",
          "type": "chart",
          "x": 0,
          "y": 24,
          "w": 20,
          "h": 24,
          "moved": false
        },
        {
          "i": "trades",
          "type": "trades",
          "x": 20,
          "y": 24,
          "w": 4,
          "h": 24,
          "moved": false
        },
        {
          "i": "chart copy 1",
          "type": "chart",
          "y": 0,
          "x": 12,
          "w": 12,
          "h": 24,
          "moved": false
        },
        {
          "i": "chart copy 2",
          "type": "chart",
          "y": 0,
          "x": 0,
          "w": 12,
          "h": 24,
          "moved": false
        }
      ]
    },
    "chart": {
      "indicatorsErrors": {
        "spot-delta": null,
        "futures-delta": null,
        "cvd-eth-perp": null
      },
      "indicators": {
        "liquidations": {
          "enabled": true,
          "name": "Liquidations",
          "description": "Liquidations by side",
          "script": "plothistogram(lbuy, color=options.upColor)\nplothistogram(-lsell, color=options.downColor)",
          "options": {
            "priceFormat": {
              "type": "volume"
            },
            "priceScaleId": "volume_liquidations",
            "upColor": "rgb(255,76,243)",
            "downColor": "rgb(255,183,77)",
            "scaleMargins": {
              "top": 0,
              "bottom": 0.94
            }
          },
          "id": "liquidations",
          "series": [
            "liquidations",
            "poq8qiwj"
          ]
        },
        "price": {
          "enabled": true,
          "name": "Price",
          "script": "plotcandlestick(options.useHeikinAshi ? avg_heikinashi(bar) : options.useGaps ? avg_ohlc_with_gaps(bar) : avg_ohlc(bar))",
          "options": {
            "priceScaleId": "right",
            "priceFormat": {
              "auto": true,
              "precision": 3,
              "minMove": 0.001
            },
            "priceLineVisible": true,
            "lastValueVisible": true,
            "borderVisible": true,
            "upColor": "rgb(59,202,109)",
            "downColor": "rgb(214,40,40)",
            "borderUpColor": "rgb(59,202,109)",
            "borderDownColor": "rgb(239,67,82)",
            "wickUpColor": "rgb(223,211,144)",
            "wickDownColor": "rgb(239,67,82)",
            "useGaps": false,
            "useHeikinAshi": false,
            "scaleMargins": {
              "top": 0.06,
              "bottom": 0.52
            }
          },
          "id": "price",
          "series": [
            "price"
          ],
          "unsavedChanges": true
        },
        "volume": {
          "enabled": true,
          "name": "Volume",
          "description": "Volume + delta",
          "script": "if (upColor === 0) {\n  if (options.showDelta) {\n    upColor = options.upBgColor\n    downColor = options.downBgColor\n  } else {\n    upColor = options.upColor\n    downColor = options.downColor\n  }\n}\n\nif (options.showDelta) {\n  plothistogram({ time: time, value: Math.abs(vbuy-vsell), color: vbuy - vsell > 0 ? options.upColor : options.downColor})\n}\n\nplothistogram({ time: time, value: vbuy + vsell, color: vbuy > vsell ? upColor : downColor })",
          "options": {
            "priceFormat": {
              "type": "volume"
            },
            "upColor": "rgb(59,202,109)",
            "downColor": "rgb(235,30,47)",
            "priceScaleId": "volume",
            "scaleMargins": {
              "top": 0.84,
              "bottom": 0
            },
            "showDelta": true,
            "upBgColor": "rgba(59,202,109,0.5)",
            "downBgColor": "rgba(235,30,47,0.5)"
          },
          "id": "volume",
          "series": [
            "volume",
            "1zyhi9fo"
          ],
          "unsavedChanges": true
        },
        "spot-delta": {
          "script": "_vbuy = (BINANCE:solusdt.vbuy+BITFINEX:SOLUSD.vbuy+BITFINEX:SOLUST.vbuy+BITGET:SOLUSDC.vbuy+BITGET:SOLUSDT.vbuy+COINBASE:SOL-USD.vbuy+COINBASE:SOL-USDT.vbuy+KRAKEN:SOL/USD.vbuy+OKEX:SOL-USDT.vbuy)\n_vsell = (BINANCE:solusdt.vsell+BITFINEX:SOLUSD.vsell+BITFINEX:SOLUST.vsell+BITGET:SOLUSDC.vsell+BITGET:SOLUSDT.vsell+COINBASE:SOL-USD.vsell+COINBASE:SOL-USDT.vsell+KRAKEN:SOL/USD.vsell+OKEX:SOL-USDT.vsell)\n\nvolume = _vbuy+_vsell\na = sma(Math.pow(volume,2),options.length)\nb = Math.pow(sum(volume,options.length),2)/Math.pow(options.length,2)\nstdev = Math.sqrt(a - b)\nbasis = sma(volume, options.length)\ndev = 1 * stdev\ntreshold = basis + dev\n\ndelta = _vbuy - _vsell\n\nplothistogram({ time: time, value: (delta), color: delta > 0 ? ( volume > treshold ? options.upColorHighVol : options.upColorLowVol) : ( volume > treshold ? options.downColorHighVol : options.downColorLowVol)}, title=\"Spot Delta\")",
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
              "top": 0.48,
              "bottom": 0.34
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
            "spot-delta copy 7"
          ],
          "displayName": "Spot Delta",
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
          "updatedAt": 1686940629384,
          "preview": {}
        },
        "futures-delta": {
          "script": "_vbuy = (BINANCE_FUTURES:solusd_perp.vbuy+BINANCE_FUTURES:solusdt.vbuy+BITFINEX:SOLF0:USTF0.vbuy+BITGET:SOLUSDT_UMCBL.vbuy+BITMEX:SOLUSD.vbuy+BITMEX:SOLUSDT.vbuy+BYBIT:SOLUSDT.vbuy+DERIBIT:SOL_USDC-PERPETUAL.vbuy+OKEX:SOL-USDT-SWAP.vbuy)\n_vsell = (BINANCE_FUTURES:solusd_perp.vsell+BINANCE_FUTURES:solusdt.vsell+BITFINEX:SOLF0:USTF0.vsell+BITGET:SOLUSDT_UMCBL.vsell+BITMEX:SOLUSD.vsell+BITMEX:SOLUSDT.vsell+BYBIT:SOLUSDT.vsell+DERIBIT:SOL_USDC-PERPETUAL.vsell+OKEX:SOL-USDT-SWAP.vsell)\n\nvolume = _vbuy+_vsell\na = sma(Math.pow(volume,2),options.length)\nb = Math.pow(sum(volume,options.length),2)/Math.pow(options.length,2)\nstdev = Math.sqrt(a - b)\nbasis = sma(volume, options.length)\ndev = 1 * stdev\ntreshold = basis + dev\n\ndelta = _vbuy - _vsell\n\nplothistogram({ time: time, value: (delta), color: delta > 0 ? ( volume > treshold ? options.upColorHighVol : options.upColorLowVol) : ( volume > treshold ? options.downColorHighVol : options.downColorLowVol)}, title=\"Futures Delta\")",
          "id": "futures-delta",
          "name": "Futures Delta",
          "options": {
            "priceScaleId": "futures-delta",
            "upColor": "rgb(100,181,246)",
            "downColor": "rgb(236,64,122)",
            "visible": true,
            "upColorLowVol": "rgb(31,106,34)",
            "downColorLowVol": "rgb(108,17,24)",
            "upColorHighVol": "rgb(109,223,113)",
            "downColorHighVol": "rgb(220,34,50)",
            "length": 14,
            "scaleMargins": {
              "top": 0.67,
              "bottom": 0.16
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
            "futures-delta copy 10"
          ],
          "displayName": "Futures Delta",
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
          "preview": {}
        },
        "cvd-sol-spot": {
          "script": "line(cum((BINANCE:solusdt.vbuy+BITFINEX:SOLUSD.vbuy+BITFINEX:SOLUST.vbuy+BITGET:SOLUSDC.vbuy+BITGET:SOLUSDT.vbuy+COINBASE:SOL-USD.vbuy+COINBASE:SOL-USDT.vbuy+KRAKEN:SOL/USD.vbuy+OKEX:SOL-USDT.vbuy)-(BINANCE:solusdt.vsell+BITFINEX:SOLUSD.vsell+BITFINEX:SOLUST.vsell+BITGET:SOLUSDC.vsell+BITGET:SOLUSDT.vsell+COINBASE:SOL-USD.vsell+COINBASE:SOL-USDT.vsell+KRAKEN:SOL/USD.vsell+OKEX:SOL-USDT.vsell)), title=SPOT CVD)",
          "name": "CVD (SOL SPOT)",
          "description": "CVD specific markets",
          "options": {
            "priceScaleId": "cvdspot",
            "priceFormat": {
              "type": "volume"
            },
            "color": "#4caf50",
            "visible": true,
            "scaleMargins": {
              "top": 0.48,
              "bottom": 0.34
            },
            "priceLineVisible": false,
            "lastValueVisible": true
          },
          "id": "cvd-sol-spot",
          "series": [
            "cvd-sol-spot"
          ],
          "displayName": "CVD (SOL SPOT)",
          "unsavedChanges": true
        },
        "cvd-sol-perp": {
          "script": "line(cum((BINANCE_FUTURES:solusd_perp.vbuy+BINANCE_FUTURES:solusdt.vbuy+BITFINEX:SOLF0:USTF0.vbuy+BITGET:SOLUSDT_UMCBL.vbuy+BITMEX:SOLUSD.vbuy+BITMEX:SOLUSDT.vbuy+BYBIT:SOLUSDT.vbuy+DERIBIT:SOL_USDC-PERPETUAL.vbuy+OKEX:SOL-USDT-SWAP.vbuy)- (BINANCE_FUTURES:solusd_perp.vsell+BINANCE_FUTURES:solusdt.vsell+BITFINEX:SOLF0:USTF0.vsell+BITGET:SOLUSDT_UMCBL.vsell+BITMEX:SOLUSD.vsell+BITMEX:SOLUSDT.vsell+BYBIT:SOLUSDT.vsell+DERIBIT:SOL_USDC-PERPETUAL.vsell+OKEX:SOL-USDT-SWAP.vsell)), title=PERP CVD)",
          "name": "CVD (SOL PERP)",
          "description": "CVD specific markets",
          "options": {
            "priceScaleId": "cvdperp",
            "priceFormat": {
              "type": "volume"
            },
            "color": "#42a5f5",
            "visible": true,
            "scaleMargins": {
              "top": 0.67,
              "bottom": 0.16
            },
            "lastValueVisible": true
          },
          "id": "cvd-sol-perp",
          "series": [
            "cvd-sol-perp"
          ],
          "displayName": "CVD (SOL PERP)",
          "unsavedChanges": true
        }
      },
      "priceScales": {
        "right": {
          "scaleMargins": {
            "top": 0.06,
            "bottom": 0.52
          },
          "indicators": [
            "Price"
          ],
          "priceFormat": {
            "precision": 3,
            "minMove": 0.001
          }
        },
        "cvd": {
          "scaleMargins": {
            "top": 0.84,
            "bottom": 0
          }
        },
        "volume_liquidations": {
          "scaleMargins": {
            "top": 0,
            "bottom": 0.94
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
        "cvdperp": {
          "scaleMargins": {
            "top": 0.67,
            "bottom": 0.16
          },
          "indicators": [
            "CVD (ETH PERP)"
          ]
        },
        "cvdspot": {
          "scaleMargins": {
            "top": 0.48,
            "bottom": 0.34
          },
          "indicators": [
            "CVD (BTC SPOT)"
          ]
        },
        "aggr-spot-delta": {
          "scaleMargins": {
            "top": 0.48,
            "bottom": 0.34
          },
          "indicators": [
            "Spot Delta"
          ]
        },
        "delta-stable-perp-aggr": {
          "scaleMargins": {
            "top": 0.67,
            "bottom": 0.16
          },
          "indicators": [
            "Futures Delta"
          ]
        },
        "futures-delta": {
          "scaleMargins": {
            "top": 0.67,
            "bottom": 0.16
          }
        }
      },
      "layouting": false,
      "showIndicators": false,
      "timeframe": "300",
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
        "BINANCE_FUTURES:solusd_perp": false,
        "BINANCE_FUTURES:solusdt": false,
        "BITFINEX:SOLF0:USTF0": false,
        "BITGET:SOLUSDT_UMCBL": false,
        "BITMEX:SOLUSD": false,
        "BITMEX:SOLUSDT": false,
        "BYBIT:SOLUSDT": false,
        "DERIBIT:SOL_USDC-PERPETUAL": false,
        "OKEX:SOL-USDT-SWAP": false,
        "BINANCE:solusdt": false,
        "BITFINEX:SOLUSD": false,
        "BITFINEX:SOLUST": false,
        "BITGET:SOLUSDC": false,
        "BITGET:SOLUSDT": false,
        "COINBASE:SOL-USD": false,
        "COINBASE:SOL-USDT": false,
        "KRAKEN:SOL/USD": false,
        "OKEX:SOL-USDT": false
      },
      "barSpacing": 7.548124733763937,
      "navigationState": {
        "tab": "script",
        "optionsQuery": "",
        "fontSizePx": 19
      },
      "_id": "chart",
      "forceNormalizePrice": false
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
      "useAudio": true,
      "audioVolume": 1,
      "audioFilters": {
        "PingPongDelay": true,
        "Compressor": false,
        "Delay": false,
        "HighPassFilter": true,
        "LowPassFilter": false
      },
      "sections": [
        "indicator-right-script",
        "indicator-right-format",
        "indicator-right-scale",
        "indicator-right-default",
        "indicator-right-colors",
        "timeframe-hours",
        "search-exchanges",
        "search-type",
        "timeframe-minutes",
        "indicator-left-script",
        "indicator-left-colors",
        "indicator-left-other",
        "settings-workspaces"
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
          "label": "SOLUSD",
          "markets": [
            "BINANCE_FUTURES:solusd_perp",
            "BINANCE_FUTURES:solusdt",
            "BINANCE:solusdt",
            "BITFINEX:SOLF0:USTF0",
            "BITFINEX:SOLUSD",
            "BITFINEX:SOLUST",
            "BITGET:SOLUSDC",
            "BITGET:SOLUSDT",
            "BITGET:SOLUSDT_UMCBL",
            "BITMEX:SOLUSD",
            "BITMEX:SOLUSDT",
            "BYBIT:SOLUSDT",
            "COINBASE:SOL-USD",
            "COINBASE:SOL-USDT",
            "DERIBIT:SOL_USDC-PERPETUAL",
            "KRAKEN:SOL/USD",
            "OKEX:SOL-USDT",
            "OKEX:SOL-USDT-SWAP"
          ],
          "count": 18
        },
        {
          "label": "SOLUSD",
          "markets": [
            "BINANCE:solusdt",
            "BITFINEX:SOLUSD",
            "BITFINEX:SOLUST",
            "BITGET:SOLUSDC",
            "BITGET:SOLUSDT",
            "COINBASE:SOL-USD",
            "COINBASE:SOL-USDT",
            "KRAKEN:SOL/USD",
            "OKEX:SOL-USDT"
          ],
          "count": 9
        },
        {
          "label": "ETHUSD",
          "markets": [
            "BINANCE:ethbusd",
            "BINANCE:ethusdc",
            "BINANCE:ethusdt",
            "BITFINEX:ETHUSD",
            "BITFINEX:ETHUST",
            "BITGET:ETHUSDC",
            "BITGET:ETHUSDT",
            "BITSTAMP:ethusd",
            "BITSTAMP:ethusdt",
            "BYBIT:ETHUSDC-SPOT",
            "BYBIT:ETHUSDT-SPOT",
            "COINBASE:ETH-USD",
            "COINBASE:ETH-USDT",
            "KRAKEN:ETH/USD",
            "KRAKEN:ETH/USDC",
            "KRAKEN:ETH/USDT",
            "KUCOIN:ETH-USDC",
            "KUCOIN:ETH-USDT",
            "MEXC:ETHUSDT",
            "OKEX:ETH-USDC",
            "OKEX:ETH-USDT"
          ],
          "count": 21
        },
        {
          "label": "ETHUSD",
          "markets": [
            "BINANCE_FUTURES:ethbusd",
            "BINANCE_FUTURES:ethusd_perp",
            "BINANCE_FUTURES:ethusdt",
            "BITFINEX:ETHF0:USTF0",
            "BITGET:ETHPERP_CMCBL",
            "BITGET:ETHUSD_DMCBL",
            "BITGET:ETHUSDT_UMCBL",
            "BITMEX:ETH_USDT",
            "BITMEX:ETHUSD",
            "BITMEX:ETHUSDT",
            "BYBIT:ETHUSD",
            "BYBIT:ETHUSDT",
            "DERIBIT:ETH_USDC-PERPETUAL",
            "DERIBIT:ETH-PERPETUAL",
            "KRAKEN:PI_ETHUSD",
            "KUCOIN:ETHUSDCM",
            "KUCOIN:ETHUSDM",
            "KUCOIN:ETHUSDTM",
            "MEXC:ETH_USD",
            "MEXC:ETH_USDT",
            "OKEX:ETH-USD-SWAP",
            "OKEX:ETH-USDC-SWAP",
            "OKEX:ETH-USDT-SWAP"
          ],
          "count": 23
        },
        {
          "label": "ETHUSD",
          "markets": [
            "BINANCE_FUTURES:ethbusd",
            "BINANCE_FUTURES:ethusd_perp",
            "BINANCE_FUTURES:ethusdt",
            "BINANCE:ethbusd",
            "BINANCE:ethusdc",
            "BINANCE:ethusdt",
            "BITFINEX:ETHF0:USTF0",
            "BITFINEX:ETHUSD",
            "BITFINEX:ETHUST",
            "BITGET:ETHPERP_CMCBL",
            "BITGET:ETHUSD_DMCBL",
            "BITGET:ETHUSDC",
            "BITGET:ETHUSDT",
            "BITGET:ETHUSDT_UMCBL",
            "BITMEX:ETH_USDT",
            "BITMEX:ETHUSD",
            "BITMEX:ETHUSDT",
            "BITSTAMP:ethusd",
            "BITSTAMP:ethusdt",
            "BYBIT:ETHUSD",
            "BYBIT:ETHUSDC-SPOT",
            "BYBIT:ETHUSDT",
            "BYBIT:ETHUSDT-SPOT",
            "COINBASE:ETH-USD",
            "COINBASE:ETH-USDT",
            "DERIBIT:ETH_USDC-PERPETUAL",
            "DERIBIT:ETH-PERPETUAL",
            "KRAKEN:ETH/USD",
            "KRAKEN:ETH/USDC",
            "KRAKEN:ETH/USDT",
            "KRAKEN:PI_ETHUSD",
            "KUCOIN:ETH-USDC",
            "KUCOIN:ETH-USDT",
            "KUCOIN:ETHUSDCM",
            "KUCOIN:ETHUSDM",
            "KUCOIN:ETHUSDTM",
            "MEXC:ETH_USD",
            "MEXC:ETH_USDT",
            "MEXC:ETHUSDT",
            "OKEX:ETH-USD-SWAP",
            "OKEX:ETH-USDC",
            "OKEX:ETH-USDC-SWAP",
            "OKEX:ETH-USDT",
            "OKEX:ETH-USDT-SWAP"
          ],
          "count": 44
        },
        {
          "label": "BTCUSD",
          "markets": [
            "BINANCE_FUTURES:btcbusd",
            "BINANCE_FUTURES:btcusd_perp",
            "BINANCE_FUTURES:btcusdt",
            "BINANCE:btcbusd",
            "BINANCE:btcusdc",
            "BINANCE:btcusdt"
          ],
          "count": 6
        },
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
            "BITGET:BTCPERP_CMCBL",
            "BITGET:BTCUSD_DMCBL",
            "BITGET:BTCUSDC",
            "BITGET:BTCUSDT",
            "BITGET:BTCUSDT_UMCBL",
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
          "count": 43
        }
      ],
      "searchExchanges": {
        "UNISWAP": false,
        "OKEX": true,
        "MEXC": true,
        "KUCOIN": true,
        "KRAKEN": true,
        "DYDX": true,
        "DERIBIT": true,
        "CRYPTOCOM": true,
        "COINBASE": true,
        "BYBIT": true,
        "BITSTAMP": true,
        "BITGET": true,
        "BITMEX": true,
        "BINANCE_FUTURES": true,
        "BITFINEX": true
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
      "alerts": true,
      "alertsColor": "rgb(255, 0, 0)",
      "alertsLineStyle": 2,
      "alertsLineWidth": 2,
      "alertsClick": false,
      "alertSound": null,
      "showThresholdsAsTable": true,
      "timeframeGroups": [
        "seconds",
        "minutes",
        "hours"
      ]
    },
    "chart copy 1": {
      "indicatorsErrors": {
        "bitfinex-spot-delta": null
      },
      "indicators": {
        "price": {
          "enabled": true,
          "name": "Price",
          "script": "plotcandlestick(options.useHeikinAshi ? avg_heikinashi(bar) : options.useGaps ? avg_ohlc_with_gaps(bar) : avg_ohlc(bar))",
          "options": {
            "priceScaleId": "right",
            "priceFormat": {
              "auto": true,
              "precision": 3,
              "minMove": 0.001
            },
            "priceLineVisible": true,
            "lastValueVisible": true,
            "borderVisible": true,
            "upColor": "rgb(59,202,109)",
            "downColor": "rgb(214,40,40)",
            "borderUpColor": "rgb(59,202,109)",
            "borderDownColor": "rgb(239,67,82)",
            "wickUpColor": "rgb(59,202,109)",
            "wickDownColor": "rgb(214,40,40)",
            "useGaps": false,
            "useHeikinAshi": false,
            "scaleMargins": {
              "top": 0,
              "bottom": 0.79
            },
            "visible": true
          },
          "id": "price",
          "series": [
            "price"
          ],
          "unsavedChanges": true,
          "displayName": "Price",
          "navigationState": {
            "sections": [
              "position",
              "colors"
            ],
            "tab": 0,
            "optionsQuery": "",
            "fontSize": 1
          },
          "preview": {}
        },
        "kraken-spot-delta": {
          "script": "_vbuy = (KRAKEN:SOL/USD.vbuy)\n_vsell = (KRAKEN:SOL/USD.vsell)\n\nvolume = _vbuy+_vsell\na = sma(Math.pow(volume,2),options.length)\nb = Math.pow(sum(volume,options.length),2)/Math.pow(options.length,2)\nstdev = Math.sqrt(a - b)\nbasis = sma(volume, options.length)\ndev = 1 * stdev\ntreshold = basis + dev\n\ndelta = _vbuy - _vsell\n\nplothistogram({ time: time, value: (delta), color: delta > 0 ? ( volume > treshold ? options.upColorHighVol : options.upColorLowVol) : ( volume > treshold ? options.downColorHighVol : options.downColorLowVol)}, title=\"KRAKEN Spot Delta\")",
          "id": "kraken-spot-delta",
          "name": "Kraken Spot Delta",
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
              "bottom": 0.12
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
            "kraken-spot-delta copy 1"
          ],
          "displayName": "Kraken Spot Delta",
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
          "updatedAt": 1689632098797,
          "preview": {}
        },
        "coinbase-spot-delta copy 1": {
          "script": "_vbuy = (COINBASE:SOL-USD.vbuy+COINBASE:SOL-USDT.vbuy)\n_vsell = (COINBASE:SOL-USD.vsell+COINBASE:SOL-USDT.vsell)\n\nvolume = _vbuy+_vsell\na = sma(Math.pow(volume,2),options.length)\nb = Math.pow(sum(volume,options.length),2)/Math.pow(options.length,2)\nstdev = Math.sqrt(a - b)\nbasis = sma(volume, options.length)\ndev = 1 * stdev\ntreshold = basis + dev\n\ndelta = _vbuy - _vsell\n\nplothistogram({ time: time, value: (delta), color: delta > 0 ? ( volume > treshold ? options.upColorHighVol : options.upColorLowVol) : ( volume > treshold ? options.downColorHighVol : options.downColorLowVol)}, title=\"COINBASE Spot Delta\")",
          "id": "coinbase-spot-delta copy 1",
          "name": "COINBASE Spot Delta",
          "options": {
            "priceScaleId": "coinbase-spot-delta",
            "upColor": "rgb(100,181,246)",
            "downColor": "rgb(236,64,122)",
            "visible": true,
            "upColorLowVol": "rgb(31,106,34)",
            "downColorLowVol": "rgb(108,17,24)",
            "upColorHighVol": "rgb(109,223,113)",
            "downColorHighVol": "rgb(220,34,50)",
            "length": 14,
            "scaleMargins": {
              "top": 0.37,
              "bottom": 0.52
            },
            "priceFormat": {
              "type": "volume",
              "precision": 2,
              "minMove": 0.01,
              "auto": false
            },
            "lastValueVisible": true,
            "priceLineVisible": false
          },
          "description": null,
          "unsavedChanges": true,
          "series": [
            "coinbase-spot-delta copy 2"
          ],
          "displayName": "COINBASE Spot Delta",
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
          "preview": {}
        },
        "binance-spot-delta": {
          "script": "_vbuy = (BINANCE:solusdt.vbuy)\n\n_vsell = (BINANCE:solusdt.vsell)\n\nvolume = _vbuy+_vsell\na = sma(Math.pow(volume,2),options.length)\nb = Math.pow(sum(volume,options.length),2)/Math.pow(options.length,2)\nstdev = Math.sqrt(a - b)\nbasis = sma(volume, options.length)\ndev = 1 * stdev\ntreshold = basis + dev\n\ndelta = _vbuy - _vsell\nis_delta_positive = delta > 0\nis_vol_sig = volume > treshold\nohlc = avg_ohlc(bar)\nis_candle_up = ohlc.close > ohlc.open\n\nplothistogram({ time: time, value: (delta), color: delta > 0 ? ( volume > treshold ? options.upColorHighVol : options.upColorLowVol) : ( volume > treshold ? options.downColorHighVol : options.downColorLowVol)}, title=\"Binance Spot Delta\")",
          "id": "binance-spot-delta",
          "name": "BINANCE Spot Delta",
          "options": {
            "priceScaleId": "binance-spot-delta",
            "upColor": "rgb(100,181,246)",
            "downColor": "rgb(236,64,122)",
            "visible": true,
            "upColorLowVol": "rgb(31,106,34)",
            "downColorLowVol": "rgb(108,17,24)",
            "upColorHighVol": "rgb(109,223,113)",
            "downColorHighVol": "rgb(220,34,50)",
            "length": 14,
            "scaleMargins": {
              "top": 0.23,
              "bottom": 0.67
            },
            "priceFormat": {
              "type": "volume",
              "precision": 2,
              "minMove": 0.01,
              "auto": false
            },
            "lastValueVisible": true,
            "priceLineVisible": false
          },
          "description": null,
          "unsavedChanges": true,
          "series": [
            "binance-spot-delta copy 1"
          ],
          "displayName": "BINANCE Spot Delta",
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
          "preview": {}
        },
        "okex-spot-delta": {
          "script": "_vbuy = (OKEX:SOL-USDT.vbuy)\n\n_vsell = (OKEX:SOL-USDT.vsell)\n\nvolume = _vbuy+_vsell\na = sma(Math.pow(volume,2),options.length)\nb = Math.pow(sum(volume,options.length),2)/Math.pow(options.length,2)\nstdev = Math.sqrt(a - b)\nbasis = sma(volume, options.length)\ndev = 1 * stdev\ntreshold = basis + dev\n\ndelta = _vbuy - _vsell\nis_delta_positive = delta > 0\nis_vol_sig = volume > treshold\nohlc = avg_ohlc(bar)\nis_candle_up = ohlc.close > ohlc.open\n\nplothistogram({ time: time, value: (delta), color: delta > 0 ? ( volume > treshold ? options.upColorHighVol : options.upColorLowVol) : ( volume > treshold ? options.downColorHighVol : options.downColorLowVol)}, title=\"OKEX Spot Delta\")",
          "id": "okex-spot-delta",
          "name": "OKEX Spot Delta",
          "options": {
            "priceScaleId": "bybit-spot-delta-copy-1",
            "upColor": "rgb(100,181,246)",
            "downColor": "rgb(236,64,122)",
            "visible": true,
            "upColorLowVol": "rgb(31,106,34)",
            "downColorLowVol": "rgb(108,17,24)",
            "upColorHighVol": "rgb(109,223,113)",
            "downColorHighVol": "rgb(220,34,50)",
            "length": 14,
            "scaleMargins": {
              "top": 0.89,
              "bottom": 0.01
            },
            "priceFormat": {
              "type": "volume",
              "precision": 2,
              "minMove": 0.01,
              "auto": false
            },
            "lastValueVisible": true,
            "priceLineVisible": false
          },
          "description": null,
          "unsavedChanges": true,
          "series": [
            "okex-spot-delta copy 1"
          ],
          "displayName": "OKEX Spot Delta",
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
          "preview": {}
        },
        "bitfinex-spot-delta": {
          "script": "_vbuy = (BITFINEX:SOLUSD.vbuy+BITFINEX:SOLUST.vbuy)\n\n_vsell = (BITFINEX:SOLUSD.vsell+BITFINEX:SOLUST.vsell)\n\nvolume = _vbuy+_vsell\na = sma(Math.pow(volume,2),options.length)\nb = Math.pow(sum(volume,options.length),2)/Math.pow(options.length,2)\nstdev = Math.sqrt(a - b)\nbasis = sma(volume, options.length)\ndev = 1 * stdev\ntreshold = basis + dev\n\ndelta = _vbuy - _vsell\nis_delta_positive = delta > 0\nis_vol_sig = volume > treshold\nohlc = avg_ohlc(bar)\nis_candle_up = ohlc.close > ohlc.open\n\nplothistogram({ time: time, value: (delta), color: delta > 0 ? ( volume > treshold ? options.upColorHighVol : options.upColorLowVol) : ( volume > treshold ? options.downColorHighVol : options.downColorLowVol)}, title=\"BITFINEX Spot Delta\")",
          "id": "bitfinex-spot-delta",
          "name": "BITFINEX Spot Delta",
          "options": {
            "priceScaleId": "bitfinex-spot-delta",
            "upColor": "rgb(100,181,246)",
            "downColor": "rgb(236,64,122)",
            "visible": true,
            "upColorLowVol": "rgb(31,106,34)",
            "downColorLowVol": "rgb(108,17,24)",
            "upColorHighVol": "rgb(109,223,113)",
            "downColorHighVol": "rgb(220,34,50)",
            "length": 14,
            "scaleMargins": {
              "top": 0.5,
              "bottom": 0.4
            },
            "priceFormat": {
              "type": "volume",
              "precision": 2,
              "minMove": 0.01,
              "auto": false
            },
            "lastValueVisible": true,
            "priceLineVisible": false
          },
          "description": null,
          "unsavedChanges": true,
          "series": [
            "bitfinex-spot-delta copy 2"
          ],
          "displayName": "BITFINEX Spot Delta",
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
          "preview": {}
        },
        "bitget-spot-delta": {
          "script": "_vbuy = (BITGET:SOLUSDC.vbuy+BITGET:SOLUSDT.vbuy)\n\n_vsell = (BITGET:SOLUSDC.vsell+BITGET:SOLUSDT.vsell)\n\nvolume = _vbuy+_vsell\na = sma(Math.pow(volume,2),options.length)\nb = Math.pow(sum(volume,options.length),2)/Math.pow(options.length,2)\nstdev = Math.sqrt(a - b)\nbasis = sma(volume, options.length)\ndev = 1 * stdev\ntreshold = basis + dev\n\ndelta = _vbuy - _vsell\nis_delta_positive = delta > 0\nis_vol_sig = volume > treshold\nohlc = avg_ohlc(bar)\nis_candle_up = ohlc.close > ohlc.open\n\nplothistogram({ time: time, value: (delta), color: delta > 0 ? ( volume > treshold ? options.upColorHighVol : options.upColorLowVol) : ( volume > treshold ? options.downColorHighVol : options.downColorLowVol)}, title=\"BITGET Spot Delta\")",
          "id": "bitget-spot-delta",
          "name": "BITGET Spot Delta",
          "options": {
            "priceScaleId": "coinbase-spot-delta-copy-1",
            "upColor": "rgb(100,181,246)",
            "downColor": "rgb(236,64,122)",
            "visible": true,
            "upColorLowVol": "rgb(31,106,34)",
            "downColorLowVol": "rgb(108,17,24)",
            "upColorHighVol": "rgb(109,223,113)",
            "downColorHighVol": "rgb(220,34,50)",
            "length": 14,
            "scaleMargins": {
              "top": 0.64,
              "bottom": 0.25
            },
            "priceFormat": {
              "type": "volume",
              "precision": 2,
              "minMove": 0.01,
              "auto": false
            },
            "lastValueVisible": true,
            "priceLineVisible": false
          },
          "description": null,
          "unsavedChanges": true,
          "series": [
            "bitget-spot-delta"
          ],
          "displayName": "BITGET Spot Delta",
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
          "preview": {}
        }
      },
      "priceScales": {
        "right": {
          "scaleMargins": {
            "top": 0,
            "bottom": 0.79
          },
          "priceFormat": {
            "precision": 3,
            "minMove": 0.001
          },
          "indicators": [
            "Price"
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
        "aggr-spot-delta": {
          "scaleMargins": {
            "top": 0.78,
            "bottom": 0.12
          },
          "indicators": [
            "Kraken Spot Delta"
          ]
        },
        "kraken-spot-delta-copy-1": {
          "scaleMargins": {
            "top": 0.3,
            "bottom": 0.57
          },
          "indicators": [
            "Kraken Spot Delta copy 1"
          ]
        },
        "coinbase-spot-delta": {
          "scaleMargins": {
            "top": 0.37,
            "bottom": 0.52
          },
          "indicators": [
            "COINBASE Spot Delta"
          ]
        },
        "coinbase-spot-delta-copy-1": {
          "scaleMargins": {
            "top": 0.64,
            "bottom": 0.25
          },
          "indicators": [
            "BITGET Spot Delta"
          ]
        },
        "kucoin-spot-delta-copy-1": {
          "scaleMargins": {
            "top": 0.33,
            "bottom": 0.58
          },
          "indicators": [
            "BYBIT Spot Delta"
          ]
        },
        "binance-spot-delta": {
          "scaleMargins": {
            "top": 0.23,
            "bottom": 0.67
          },
          "indicators": [
            "BINANCE Spot Delta"
          ]
        },
        "bybit-spot-delta-copy-1": {
          "scaleMargins": {
            "top": 0.89,
            "bottom": 0.01
          },
          "indicators": [
            "OKEX Spot Delta"
          ]
        },
        "bitfinex-spot-delta": {
          "scaleMargins": {
            "top": 0.5,
            "bottom": 0.4
          },
          "indicators": [
            "BITFINEX Spot Delta"
          ]
        }
      },
      "layouting": false,
      "showIndicators": true,
      "timeframe": "1800",
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
      "hiddenMarkets": {},
      "barSpacing": 8.48192225458897,
      "navigationState": {
        "tab": "script",
        "optionsQuery": "",
        "fontSizePx": 19
      },
      "_id": "chart copy 1"
    },
    "chart copy 2": {
      "indicatorsErrors": {
        "bybit-perp-delta": null
      },
      "indicators": {
        "liquidations": {
          "enabled": true,
          "name": "Liquidations",
          "description": "Liquidations by side",
          "script": "plothistogram(lbuy, color=options.upColor)\nplothistogram(-lsell, color=options.downColor)",
          "options": {
            "priceScaleId": "liquidations",
            "priceFormat": {
              "type": "price",
              "precision": 2,
              "minMove": 0.01,
              "auto": false
            },
            "upColor": "rgb(184,110,104)",
            "downColor": "rgb(111,184,104)",
            "scaleMargins": {
              "top": 0.82,
              "bottom": 0.1
            },
            "lastValueVisible": false,
            "visible": false
          },
          "id": "liquidations",
          "unsavedChanges": false,
          "series": [
            "liquidations",
            "fauew5qt"
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
          "preview": {}
        },
        "price": {
          "enabled": true,
          "name": "Price",
          "script": "plotcandlestick(options.useHeikinAshi ? avg_heikinashi(bar) : options.useGaps ? avg_ohlc_with_gaps(bar) : avg_ohlc(bar))",
          "options": {
            "priceScaleId": "right",
            "priceFormat": {
              "auto": true,
              "precision": 3,
              "minMove": 0.001
            },
            "priceLineVisible": true,
            "lastValueVisible": true,
            "borderVisible": true,
            "upColor": "rgb(59,202,109)",
            "downColor": "rgb(214,40,40)",
            "borderUpColor": "rgb(59,202,109)",
            "borderDownColor": "rgb(239,67,82)",
            "wickUpColor": "rgb(59,202,109)",
            "wickDownColor": "rgb(214,40,40)",
            "useGaps": false,
            "useHeikinAshi": false,
            "scaleMargins": {
              "top": 0,
              "bottom": 0.79
            },
            "visible": true
          },
          "id": "price",
          "series": [
            "price"
          ],
          "unsavedChanges": true,
          "displayName": "Price",
          "navigationState": {
            "sections": [
              "position",
              "colors"
            ],
            "tab": 0,
            "optionsQuery": "",
            "fontSize": 1
          },
          "preview": {}
        },
        "deribit-btc-delta": {
          "script": "_vbuy = (DERIBIT:SOL_USDC-PERPETUAL.vbuy)\n\n_vsell = (DERIBIT:SOL_USDC-PERPETUAL.vsell)\n\nvolume = _vbuy+_vsell\na = sma(Math.pow(volume,2),options.length)\nb = Math.pow(sum(volume,options.length),2)/Math.pow(options.length,2)\nstdev = Math.sqrt(a - b)\nbasis = sma(volume, options.length)\ndev = 1 * stdev\ntreshold = basis + dev\n\ndelta = _vbuy - _vsell\nis_delta_positive = delta > 0\nis_vol_sig = volume > treshold\nohlc = avg_ohlc(bar)\nis_candle_up = ohlc.close > ohlc.open\n\nplothistogram({ time: time, value: (delta), color: delta > 0 ? ( volume > treshold ? options.upColorHighVol : options.upColorLowVol) : ( volume > treshold ? options.downColorHighVol : options.downColorLowVol)}, title=\"DERIBIT Perp Delta\")",
          "id": "deribit-btc-delta",
          "name": "DERIBIT BTC DELTA",
          "options": {
            "priceScaleId": "binance-btc-usd-delta-copy-2",
            "upColor": "rgb(100,181,246)",
            "downColor": "rgb(239,83,80)",
            "visible": true,
            "upColorHighVol": "rgb(109,223,113)",
            "upColorLowVol": "rgb(31,106,34)",
            "downColorHighVol": "rgb(220,34,50)",
            "downColorLowVol": "rgb(108,17,24)",
            "length": 14,
            "scaleMargins": {
              "top": 0.76,
              "bottom": 0.14
            },
            "priceLineVisible": false,
            "lastValueVisible": true,
            "priceFormat": {
              "type": "volume",
              "precision": 2,
              "minMove": 0.01,
              "auto": false
            },
            "divColorSigUp": "rgb(111,184,104)",
            "divColorSigDown": "rgb(184,110,104)",
            "divColorSmolDown": "rgb(181,147,144)",
            "divColorSmolUp": "rgb(148,189,156)"
          },
          "description": null,
          "unsavedChanges": true,
          "series": [
            "deribit-btc-delta copy 1"
          ],
          "displayName": "DERIBIT BTC DELTA",
          "navigationState": {
            "sections": [
              "format",
              "defaultOptions",
              "scriptOptions",
              "colors"
            ],
            "tab": "#script",
            "optionsQuery": "",
            "fontSize": 1
          },
          "preview": {}
        },
        "okex-usdt-swap": {
          "script": "_vbuy = (OKEX:SOL-USDT-SWAP.vbuy)\n\n_vsell = (OKEX:SOL-USDT-SWAP.vsell)\n\nvolume = _vbuy+_vsell\na = sma(Math.pow(volume,2),options.length)\nb = Math.pow(sum(volume,options.length),2)/Math.pow(options.length,2)\nstdev = Math.sqrt(a - b)\nbasis = sma(volume, options.length)\ndev = 1 * stdev\ntreshold = basis + dev\n\ndelta = _vbuy - _vsell\nis_delta_positive = delta > 0\nis_vol_sig = volume > treshold\nohlc = avg_ohlc(bar)\nis_candle_up = ohlc.close > ohlc.open\n\nplothistogram({ time: time, value: (delta), color: delta > 0 ? ( volume > treshold ? options.upColorHighVol : options.upColorLowVol) : ( volume > treshold ? options.downColorHighVol : options.downColorLowVol)}, title=\"OKEX Perp Delta\")",
          "id": "okex-usdt-swap",
          "name": "OKEX USDT SWAP ",
          "options": {
            "priceScaleId": "binance-btc-usd-delta-copy-5",
            "upColor": "rgb(100,181,246)",
            "downColor": "rgb(239,83,80)",
            "visible": true,
            "upColorHighVol": "rgb(109,223,113)",
            "upColorLowVol": "rgb(31,106,34)",
            "downColorHighVol": "rgb(220,34,50)",
            "downColorLowVol": "rgb(108,17,24)",
            "length": 14,
            "scaleMargins": {
              "top": 0.89,
              "bottom": 0.01
            },
            "priceLineVisible": false,
            "lastValueVisible": true,
            "priceFormat": {
              "type": "volume",
              "precision": 2,
              "minMove": 0.01,
              "auto": false
            },
            "divColorSigUp": "rgb(111,184,104)",
            "divColorSigDown": "rgb(184,110,104)",
            "divColorSmolDown": "rgb(181,147,144)",
            "divColorSmolUp": "rgb(148,189,156)"
          },
          "description": null,
          "unsavedChanges": true,
          "series": [
            "okex-usdt-swap copy 1"
          ],
          "displayName": "OKEX USDT SWAP ",
          "navigationState": {
            "sections": [
              "format",
              "defaultOptions",
              "scriptOptions",
              "colors"
            ],
            "tab": "#script",
            "optionsQuery": "",
            "fontSize": 1
          },
          "preview": {}
        },
        "binance-perp-delta": {
          "script": "_vbuy = (BINANCE_FUTURES:solusd_perp.vbuy+BINANCE_FUTURES:solusdt.vbuy)\n\n_vsell = (BINANCE_FUTURES:solusd_perp.vsell+BINANCE_FUTURES:solusdt.vsell)\n\nvolume = _vbuy+_vsell\na = sma(Math.pow(volume,2),options.length)\nb = Math.pow(sum(volume,options.length),2)/Math.pow(options.length,2)\nstdev = Math.sqrt(a - b)\nbasis = sma(volume, options.length)\ndev = 1 * stdev\ntreshold = basis + dev\n\ndelta = _vbuy - _vsell\nis_delta_positive = delta > 0\nis_vol_sig = volume > treshold\nohlc = avg_ohlc(bar)\nis_candle_up = ohlc.close > ohlc.open\n\nplothistogram({ time: time, value: (delta), color: delta > 0 ? ( volume > treshold ? options.upColorHighVol : options.upColorLowVol) : ( volume > treshold ? options.downColorHighVol : options.downColorLowVol)}, title=\"Binance Perp Delta\")",
          "id": "binance-perp-delta",
          "name": "BINANCE Perp Delta",
          "options": {
            "priceScaleId": "Bybit-delta",
            "upColor": "rgb(100,181,246)",
            "downColor": "rgb(239,83,80)",
            "visible": true,
            "upColorHighVol": "rgb(109,223,113)",
            "upColorLowVol": "rgb(31,106,34)",
            "downColorHighVol": "rgb(220,34,50)",
            "downColorLowVol": "rgb(108,17,24)",
            "length": 14,
            "scaleMargins": {
              "top": 0.23,
              "bottom": 0.68
            },
            "priceLineVisible": false,
            "lastValueVisible": true,
            "priceFormat": {
              "type": "volume",
              "precision": 2,
              "minMove": 0.01,
              "auto": false
            },
            "divColorSigUp": "rgb(111,184,104)",
            "divColorSigDown": "rgb(184,110,104)",
            "divColorSmolDown": "rgb(181,147,144)",
            "divColorSmolUp": "rgb(148,189,156)"
          },
          "description": null,
          "unsavedChanges": true,
          "series": [
            "binance-perp-delta copy 5"
          ],
          "displayName": "BINANCE Perp Delta",
          "navigationState": {
            "sections": [
              "format",
              "defaultOptions",
              "scriptOptions",
              "colors"
            ],
            "tab": "#script",
            "optionsQuery": "",
            "fontSize": 1
          },
          "updatedAt": 1686945088825,
          "preview": {}
        },
        "bybit-perp-delta": {
          "script": "_vbuy = (BYBIT:SOLUSDT.vbuy)\n\n_vsell = (BYBIT:SOLUSDT.vsell)\n\nvolume = _vbuy+_vsell\na = sma(Math.pow(volume,2),options.length)\nb = Math.pow(sum(volume,options.length),2)/Math.pow(options.length,2)\nstdev = Math.sqrt(a - b)\nbasis = sma(volume, options.length)\ndev = 1 * stdev\ntreshold = basis + dev\n\ndelta = _vbuy - _vsell\nis_delta_positive = delta > 0\nis_vol_sig = volume > treshold\nohlc = avg_ohlc(bar)\nis_candle_up = ohlc.close > ohlc.open\n\nplothistogram({ time: time, value: (delta), color: delta > 0 ? ( volume > treshold ? options.upColorHighVol : options.upColorLowVol) : ( volume > treshold ? options.downColorHighVol : options.downColorLowVol)}, title=\"BYBIT Perp Delta\")",
          "id": "bybit-perp-delta",
          "name": "BYBIT Perp Delta",
          "options": {
            "priceScaleId": "binance-perp-delta-copy-1",
            "upColor": "rgb(100,181,246)",
            "downColor": "rgb(239,83,80)",
            "visible": true,
            "upColorHighVol": "rgb(109,223,113)",
            "upColorLowVol": "rgb(31,106,34)",
            "downColorHighVol": "rgb(220,34,50)",
            "downColorLowVol": "rgb(108,17,24)",
            "length": 14,
            "scaleMargins": {
              "top": 0.33,
              "bottom": 0.58
            },
            "priceLineVisible": false,
            "lastValueVisible": true,
            "priceFormat": {
              "type": "volume",
              "precision": 2,
              "minMove": 0.01,
              "auto": false
            },
            "divColorSigUp": "rgb(111,184,104)",
            "divColorSigDown": "rgb(184,110,104)",
            "divColorSmolDown": "rgb(181,147,144)",
            "divColorSmolUp": "rgb(148,189,156)"
          },
          "description": null,
          "unsavedChanges": true,
          "series": [
            "bybit-perp-delta copy 2"
          ],
          "displayName": "BYBIT Perp Delta",
          "navigationState": {
            "sections": [
              "format",
              "defaultOptions",
              "scriptOptions",
              "colors"
            ],
            "tab": "#script",
            "optionsQuery": "",
            "fontSize": 1
          },
          "preview": {}
        },
        "bitmex-perp-delta": {
          "script": "_vbuy = (BITMEX:SOLUSD.vbuy+BITMEX:SOLUSDT.vbuy)\n\n_vsell = (BITMEX:SOLUSD.vsell+BITMEX:SOLUSDT.vsell)\n\nvolume = _vbuy+_vsell\na = sma(Math.pow(volume,2),options.length)\nb = Math.pow(sum(volume,options.length),2)/Math.pow(options.length,2)\nstdev = Math.sqrt(a - b)\nbasis = sma(volume, options.length)\ndev = 1 * stdev\ntreshold = basis + dev\n\ndelta = _vbuy - _vsell\nis_delta_positive = delta > 0\nis_vol_sig = volume > treshold\nohlc = avg_ohlc(bar)\nis_candle_up = ohlc.close > ohlc.open\n\nplothistogram({ time: time, value: (delta), color: delta > 0 ? ( volume > treshold ? options.upColorHighVol : options.upColorLowVol) : ( volume > treshold ? options.downColorHighVol : options.downColorLowVol)}, title=\"BITMEX Perp Delta\")",
          "id": "bitmex-perp-delta",
          "name": "BITMEX Perp Delta",
          "options": {
            "priceScaleId": "bitmex-perp-delta",
            "upColor": "rgb(100,181,246)",
            "downColor": "rgb(239,83,80)",
            "visible": true,
            "upColorHighVol": "rgb(109,223,113)",
            "upColorLowVol": "rgb(31,106,34)",
            "downColorHighVol": "rgb(220,34,50)",
            "downColorLowVol": "rgb(108,17,24)",
            "length": 14,
            "scaleMargins": {
              "top": 0.44,
              "bottom": 0.47
            },
            "priceLineVisible": false,
            "lastValueVisible": true,
            "priceFormat": {
              "type": "volume",
              "precision": 2,
              "minMove": 0.01,
              "auto": false
            },
            "divColorSigUp": "rgb(111,184,104)",
            "divColorSigDown": "rgb(184,110,104)",
            "divColorSmolDown": "rgb(181,147,144)",
            "divColorSmolUp": "rgb(148,189,156)"
          },
          "description": null,
          "unsavedChanges": true,
          "series": [
            "bitmex-perp-delta copy 1"
          ],
          "displayName": "BITMEX Perp Delta",
          "navigationState": {
            "sections": [
              "format",
              "defaultOptions",
              "scriptOptions",
              "colors"
            ],
            "tab": "#script",
            "optionsQuery": "",
            "fontSize": 1
          },
          "preview": {},
          "lastPreset": null
        },
        "bitfinex-perp-delta": {
          "script": "_vbuy = (BITFINEX:SOLF0:USTF0.vbuy)\n\n_vsell = (BITFINEX:SOLF0:USTF0.vsell)\n\nvolume = _vbuy+_vsell\na = sma(Math.pow(volume,2),options.length)\nb = Math.pow(sum(volume,options.length),2)/Math.pow(options.length,2)\nstdev = Math.sqrt(a - b)\nbasis = sma(volume, options.length)\ndev = 1 * stdev\ntreshold = basis + dev\n\ndelta = _vbuy - _vsell\nis_delta_positive = delta > 0\nis_vol_sig = volume > treshold\nohlc = avg_ohlc(bar)\nis_candle_up = ohlc.close > ohlc.open\n\nplothistogram({ time: time, value: (delta), color: delta > 0 ? ( volume > treshold ? options.upColorHighVol : options.upColorLowVol) : ( volume > treshold ? options.downColorHighVol : options.downColorLowVol)}, title=\"BITFINEX Perp Delta\")",
          "id": "bitfinex-perp-delta",
          "name": "BITFINEX Perp Delta",
          "options": {
            "priceScaleId": "bitfinex-perp-delta",
            "upColor": "rgb(100,181,246)",
            "downColor": "rgb(239,83,80)",
            "visible": true,
            "upColorHighVol": "rgb(109,223,113)",
            "upColorLowVol": "rgb(31,106,34)",
            "downColorHighVol": "rgb(220,34,50)",
            "downColorLowVol": "rgb(108,17,24)",
            "length": 14,
            "scaleMargins": {
              "top": 0.53,
              "bottom": 0.37
            },
            "priceLineVisible": false,
            "lastValueVisible": true,
            "priceFormat": {
              "type": "volume",
              "precision": 2,
              "minMove": 0.01,
              "auto": false
            },
            "divColorSigUp": "rgb(111,184,104)",
            "divColorSigDown": "rgb(184,110,104)",
            "divColorSmolDown": "rgb(181,147,144)",
            "divColorSmolUp": "rgb(148,189,156)"
          },
          "description": null,
          "unsavedChanges": true,
          "series": [
            "bitfinex-perp-delta copy 10"
          ],
          "displayName": "BITFINEX Perp Delta",
          "navigationState": {
            "sections": [
              "format",
              "defaultOptions",
              "scriptOptions",
              "colors"
            ],
            "tab": "#script",
            "optionsQuery": "",
            "fontSize": 1
          },
          "preview": {},
          "lastPreset": null
        },
        "bitget-usdt-perp": {
          "script": "_vbuy = (BITGET:SOLUSDT_UMCBL.vbuy)\n\n_vsell = (BITGET:SOLUSDT_UMCBL.vsell)\n\nvolume = _vbuy+_vsell\na = sma(Math.pow(volume,2),options.length)\nb = Math.pow(sum(volume,options.length),2)/Math.pow(options.length,2)\nstdev = Math.sqrt(a - b)\nbasis = sma(volume, options.length)\ndev = 1 * stdev\ntreshold = basis + dev\n\ndelta = _vbuy - _vsell\nis_delta_positive = delta > 0\nis_vol_sig = volume > treshold\nohlc = avg_ohlc(bar)\nis_candle_up = ohlc.close > ohlc.open\n\nplothistogram({ time: time, value: (delta), color: delta > 0 ? ( volume > treshold ? options.upColorHighVol : options.upColorLowVol) : ( volume > treshold ? options.downColorHighVol : options.downColorLowVol)}, title=\"BITGET USDT Perp\")",
          "id": "bitget-usdt-perp",
          "name": "BITGET USDT PERP",
          "options": {
            "priceScaleId": "binance-btc-usd-delta-copy-4",
            "upColor": "rgb(100,181,246)",
            "downColor": "rgb(239,83,80)",
            "visible": true,
            "upColorHighVol": "rgb(109,223,113)",
            "upColorLowVol": "rgb(31,106,34)",
            "downColorHighVol": "rgb(220,34,50)",
            "downColorLowVol": "rgb(108,17,24)",
            "length": 14,
            "scaleMargins": {
              "top": 0.65,
              "bottom": 0.26
            },
            "priceLineVisible": false,
            "lastValueVisible": true,
            "priceFormat": {
              "type": "volume",
              "precision": 2,
              "minMove": 0.01,
              "auto": false
            },
            "divColorSigUp": "rgb(111,184,104)",
            "divColorSigDown": "rgb(184,110,104)",
            "divColorSmolDown": "rgb(181,147,144)",
            "divColorSmolUp": "rgb(148,189,156)"
          },
          "description": null,
          "unsavedChanges": true,
          "series": [
            "bitget-usdt-perp copy 1"
          ],
          "displayName": "BITGET USDT PERP",
          "navigationState": {
            "sections": [
              "format",
              "defaultOptions",
              "scriptOptions",
              "colors"
            ],
            "tab": "#script",
            "optionsQuery": "",
            "fontSize": 1
          },
          "preview": {}
        }
      },
      "priceScales": {
        "right": {
          "scaleMargins": {
            "top": 0,
            "bottom": 0.79
          },
          "priceFormat": {
            "precision": 3,
            "minMove": 0.001
          },
          "indicators": [
            "Price"
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
        "Bybit-delta": {
          "scaleMargins": {
            "top": 0.23,
            "bottom": 0.68
          },
          "indicators": [
            "BINANCE Perp Delta"
          ]
        },
        "binance-btc-delta": {
          "scaleMargins": {
            "top": 0.1,
            "bottom": 0.2
          }
        },
        "binance-btc-usd-delta-copy-1": {
          "scaleMargins": {
            "top": 0.31,
            "bottom": 0.56
          },
          "indicators": [
            "BINANCE BTC-USD Delta copy 1"
          ]
        },
        "binance-btc-usd-delta-copy-2": {
          "scaleMargins": {
            "top": 0.76,
            "bottom": 0.14
          },
          "indicators": [
            "DERIBIT BTC DELTA"
          ]
        },
        "binance-btc-usd-delta-copy-3": {
          "scaleMargins": {
            "top": 0.57,
            "bottom": 0.3
          },
          "indicators": [
            "BINANCE BTC-USD Delta copy 3"
          ]
        },
        "binance-btc-usd-delta-copy-4": {
          "scaleMargins": {
            "top": 0.65,
            "bottom": 0.26
          },
          "indicators": [
            "MEXC USDT PERP"
          ]
        },
        "binance-btc-usd-delta-copy-5": {
          "scaleMargins": {
            "top": 0.89,
            "bottom": 0.01
          },
          "indicators": [
            "OKEX USDT SWAP "
          ]
        },
        "binance-perp-delta-copy-1": {
          "scaleMargins": {
            "top": 0.33,
            "bottom": 0.58
          },
          "indicators": [
            "BYBIT Perp Delta"
          ]
        },
        "bitmex-perp-delta": {
          "scaleMargins": {
            "top": 0.44,
            "bottom": 0.47
          },
          "indicators": [
            "BITMEX Perp Delta"
          ]
        },
        "bitmex-perp-delta-copy-1": {
          "scaleMargins": {
            "top": 0.55,
            "bottom": 0.36
          },
          "indicators": [
            "BITFINEX Perp Delta"
          ]
        },
        "bitfinex-perp-delta": {
          "scaleMargins": {
            "top": 0.53,
            "bottom": 0.37
          },
          "indicators": [
            "BITFINEX Perp Delta"
          ]
        }
      },
      "layouting": false,
      "showIndicators": true,
      "timeframe": "1800",
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
      "hiddenMarkets": {},
      "barSpacing": 6.167203929160588,
      "navigationState": {
        "tab": "script",
        "optionsQuery": "",
        "fontSizePx": 16
      },
      "_id": "chart copy 2"
    }
  },
  "createdAt": 1695416930348,
  "updatedAt": 1695692167127
}

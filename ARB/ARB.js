{
  "version": 7,
  "name": "ARB",
  "id": "arb",
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
            "BITFINEX:ARBUSD",
            "BITFINEX:ARBUST",
            "BITGET:ARBUSDT",
            "BITGET:ARBUSDT_UMCBL",
            "BITMEX:ARBUSD",
            "BITMEX:ARBUSDT",
            "BYBIT:ARBUSDT",
            "BYBIT:ARBUSDT-SPOT",
            "COINBASE:ARB-USD",
            "KRAKEN:ARB/USD",
            "KUCOIN:ARB-USDT",
            "KUCOIN:ARBUSDTM",
            "OKEX:ARB-USDT",
            "OKEX:ARB-USDT-SWAP"
          ],
          "zoom": 1.25
        },
        "trades": {
          "id": "trades",
          "name": "",
          "type": "trades",
          "markets": [
            "BITFINEX:ARBUSD",
            "BITFINEX:ARBUST",
            "BITGET:ARBUSDT",
            "BITGET:ARBUSDT_UMCBL",
            "BITMEX:ARBUSD",
            "BITMEX:ARBUSDT",
            "BYBIT:ARBUSDT",
            "BYBIT:ARBUSDT-SPOT",
            "COINBASE:ARB-USD",
            "KRAKEN:ARB/USD",
            "KUCOIN:ARB-USDT",
            "KUCOIN:ARBUSDTM",
            "OKEX:ARB-USDT",
            "OKEX:ARB-USDT-SWAP"
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
            "BITFINEX:ARBUSD",
            "BITFINEX:ARBUST",
            "BITGET:ARBUSDT",
            "BYBIT:ARBUSDT-SPOT",
            "COINBASE:ARB-USD",
            "KRAKEN:ARB/USD",
            "KUCOIN:ARB-USDT",
            "OKEX:ARB-USDT"
          ]
        },
        "chart copy 2": {
          "id": "chart copy 2",
          "name": "",
          "type": "chart",
          "markets": [
            "BITGET:ARBUSDT_UMCBL",
            "BITMEX:ARBUSD",
            "BITMEX:ARBUSDT",
            "BYBIT:ARBUSDT",
            "KUCOIN:ARBUSDTM",
            "OKEX:ARB-USDT-SWAP"
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
        "spot-delta": null
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
            "liquidations copy 1",
            "n8o74zjt"
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
              "precision": 4,
              "minMove": 0.0001
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
            "8ydcx3ji"
          ],
          "unsavedChanges": true
        },
        "spot-delta": {
          "script": "_vbuy = (BITFINEX:ARBUSD.vbuy+BITFINEX:ARBUST.vbuy+BITGET:ARBUSDT.vbuy+BYBIT:ARBUSDT-SPOT.vbuy+COINBASE:ARB-USD.vbuy+KRAKEN:ARB/USD.vbuy+KUCOIN:ARB-USDT.vbuy+OKEX:ARB-USDT.vbuy)\n_vsell = (BITFINEX:ARBUSD.vsell+BITFINEX:ARBUST.vsell+BITGET:ARBUSDT.vsell+BYBIT:ARBUSDT-SPOT.vsell+COINBASE:ARB-USD.vsell+KRAKEN:ARB/USD.vsell+KUCOIN:ARB-USDT.vsell+OKEX:ARB-USDT.vsell)\n\nvolume = _vbuy+_vsell\na = sma(Math.pow(volume,2),options.length)\nb = Math.pow(sum(volume,options.length),2)/Math.pow(options.length,2)\nstdev = Math.sqrt(a - b)\nbasis = sma(volume, options.length)\ndev = 1 * stdev\ntreshold = basis + dev\n\ndelta = _vbuy - _vsell\n\nplothistogram({ time: time, value: (delta), color: delta > 0 ? ( volume > treshold ? options.upColorHighVol : options.upColorLowVol) : ( volume > treshold ? options.downColorHighVol : options.downColorLowVol)}, title=\"Spot Delta\")",
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
            "spot-delta copy 3"
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
          "script": "_vbuy = (BITGET:ARBUSDT_UMCBL.vbuy+BITMEX:ARBUSD.vbuy+BITMEX:ARBUSDT.vbuy+BYBIT:ARBUSDT.vbuy+KUCOIN:ARBUSDTM.vbuy+OKEX:ARB-USDT-SWAP.vbuy)\n_vsell = (BITGET:ARBUSDT_UMCBL.vsell+BITMEX:ARBUSD.vsell+BITMEX:ARBUSDT.vsell+BYBIT:ARBUSDT.vsell+KUCOIN:ARBUSDTM.vsell+OKEX:ARB-USDT-SWAP.vsell)\n\nvolume = _vbuy+_vsell\na = sma(Math.pow(volume,2),options.length)\nb = Math.pow(sum(volume,options.length),2)/Math.pow(options.length,2)\nstdev = Math.sqrt(a - b)\nbasis = sma(volume, options.length)\ndev = 1 * stdev\ntreshold = basis + dev\n\ndelta = _vbuy - _vsell\n\nplothistogram({ time: time, value: (delta), color: delta > 0 ? ( volume > treshold ? options.upColorHighVol : options.upColorLowVol) : ( volume > treshold ? options.downColorHighVol : options.downColorLowVol)}, title=\"PERP Delta\")",
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
            "futures-delta copy 3"
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
        "cvd-arb-spot": {
          "script": "line(cum((BITFINEX:ARBUSD.vbuy+BITFINEX:ARBUST.vbuy+BITGET:ARBUSDT.vbuy+BYBIT:ARBUSDT-SPOT.vbuy+COINBASE:ARB-USD.vbuy+KRAKEN:ARB/USD.vbuy+KUCOIN:ARB-USDT.vbuy+OKEX:ARB-USDT.vbuy)-(BITFINEX:ARBUSD.vsell+BITFINEX:ARBUST.vsell+BITGET:ARBUSDT.vsell+BYBIT:ARBUSDT-SPOT.vsell+COINBASE:ARB-USD.vsell+KRAKEN:ARB/USD.vsell+KUCOIN:ARB-USDT.vsell+OKEX:ARB-USDT.vsell)), title=SPOT CVD)",
          "name": "CVD (ARB SPOT)",
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
          "id": "cvd-arb-spot",
          "series": [
            "cvd-arb-spot copy 2"
          ],
          "displayName": "CVD (ARB SPOT)",
          "unsavedChanges": true
        },
        "cvd-arb-perp": {
          "script": "line(cum((BITGET:ARBUSDT_UMCBL.vbuy+BITMEX:ARBUSD.vbuy+BITMEX:ARBUSDT.vbuy+BYBIT:ARBUSDT.vbuy+KUCOIN:ARBUSDTM.vbuy+OKEX:ARB-USDT-SWAP.vbuy)- (BITGET:ARBUSDT_UMCBL.vsell+BITMEX:ARBUSD.vsell+BITMEX:ARBUSDT.vsell+BYBIT:ARBUSDT.vsell+KUCOIN:ARBUSDTM.vsell+OKEX:ARB-USDT-SWAP.vsell)), title=PERP CVD)",
          "name": "CVD (ARB PERP)",
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
          "id": "cvd-arb-perp",
          "series": [
            "cvd-arb-perp"
          ],
          "displayName": "CVD (ARB PERP)",
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
            "precision": 4,
            "minMove": 0.0001
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
        "BITGET:ARBUSDT_UMCBL": false,
        "BITMEX:ARBUSD": false,
        "BITMEX:ARBUSDT": false,
        "BYBIT:ARBUSDT": false,
        "KUCOIN:ARBUSDTM": false,
        "OKEX:ARB-USDT-SWAP": false,
        "BITFINEX:ARBUSD": false,
        "BITFINEX:ARBUST": false,
        "BITGET:ARBUSDT": false,
        "BYBIT:ARBUSDT-SPOT": false,
        "COINBASE:ARB-USD": false,
        "KRAKEN:ARB/USD": false,
        "KUCOIN:ARB-USDT": false,
        "OKEX:ARB-USDT": false
      },
      "barSpacing": 7.8446715749412546,
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
          "label": "ARBUSD",
          "markets": [
            "BITFINEX:ARBUSD",
            "BITFINEX:ARBUST",
            "BITGET:ARBUSDT",
            "BITGET:ARBUSDT_UMCBL",
            "BITMEX:ARBUSD",
            "BITMEX:ARBUSDT",
            "BYBIT:ARBUSDT",
            "BYBIT:ARBUSDT-SPOT",
            "COINBASE:ARB-USD",
            "KRAKEN:ARB/USD",
            "KUCOIN:ARB-USDT",
            "KUCOIN:ARBUSDTM",
            "OKEX:ARB-USDT",
            "OKEX:ARB-USDT-SWAP"
          ],
          "count": 14
        },
        {
          "label": "ARBUSD",
          "markets": [
            "BITFINEX:ARBUSD",
            "BITFINEX:ARBUST",
            "BITGET:ARBUSDT",
            "BYBIT:ARBUSDT-SPOT",
            "COINBASE:ARB-USD",
            "KRAKEN:ARB/USD",
            "KUCOIN:ARB-USDT",
            "OKEX:ARB-USDT"
          ],
          "count": 8
        },
        {
          "label": "ARBUSD",
          "markets": [
            "BITGET:ARBUSDT_UMCBL",
            "BITMEX:ARBUSD",
            "BITMEX:ARBUSDT",
            "BYBIT:ARBUSDT",
            "KUCOIN:ARBUSDTM",
            "OKEX:ARB-USDT-SWAP"
          ],
          "count": 6
        },
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
      "indicatorsErrors": {},
      "indicators": {
        "price": {
          "enabled": true,
          "name": "Price",
          "script": "plotcandlestick(options.useHeikinAshi ? avg_heikinashi(bar) : options.useGaps ? avg_ohlc_with_gaps(bar) : avg_ohlc(bar))",
          "options": {
            "priceScaleId": "right",
            "priceFormat": {
              "auto": true,
              "precision": 4,
              "minMove": 0.0001
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
          "script": "_vbuy = (KRAKEN:ARB/USD.vbuy)\n_vsell = (KRAKEN:ARB/USD.vsell)\n\nvolume = _vbuy+_vsell\na = sma(Math.pow(volume,2),options.length)\nb = Math.pow(sum(volume,options.length),2)/Math.pow(options.length,2)\nstdev = Math.sqrt(a - b)\nbasis = sma(volume, options.length)\ndev = 1 * stdev\ntreshold = basis + dev\n\ndelta = _vbuy - _vsell\n\nplothistogram({ time: time, value: (delta), color: delta > 0 ? ( volume > treshold ? options.upColorHighVol : options.upColorLowVol) : ( volume > treshold ? options.downColorHighVol : options.downColorLowVol)}, title=\"KRAKEN Spot Delta\")",
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
              "top": 0.58,
              "bottom": 0.32
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
          "script": "_vbuy = (COINBASE:ARB-USD.vbuy)\n_vsell = (COINBASE:ARB-USD.vsell)\n\nvolume = _vbuy+_vsell\na = sma(Math.pow(volume,2),options.length)\nb = Math.pow(sum(volume,options.length),2)/Math.pow(options.length,2)\nstdev = Math.sqrt(a - b)\nbasis = sma(volume, options.length)\ndev = 1 * stdev\ntreshold = basis + dev\n\ndelta = _vbuy - _vsell\n\nplothistogram({ time: time, value: (delta), color: delta > 0 ? ( volume > treshold ? options.upColorHighVol : options.upColorLowVol) : ( volume > treshold ? options.downColorHighVol : options.downColorLowVol)}, title=\"COINBASE Spot Delta\")",
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
              "top": 0.34,
              "bottom": 0.56
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
            "coinbase-spot-delta copy 3"
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
        "okex-spot-delta": {
          "script": "_vbuy = (OKEX:ARB-USDT.vbuy)\n\n_vsell = (OKEX:ARB-USDT.vsell)\n\nvolume = _vbuy+_vsell\na = sma(Math.pow(volume,2),options.length)\nb = Math.pow(sum(volume,options.length),2)/Math.pow(options.length,2)\nstdev = Math.sqrt(a - b)\nbasis = sma(volume, options.length)\ndev = 1 * stdev\ntreshold = basis + dev\n\ndelta = _vbuy - _vsell\nis_delta_positive = delta > 0\nis_vol_sig = volume > treshold\nohlc = avg_ohlc(bar)\nis_candle_up = ohlc.close > ohlc.open\n\nplothistogram({ time: time, value: (delta), color: delta > 0 ? ( volume > treshold ? options.upColorHighVol : options.upColorLowVol) : ( volume > treshold ? options.downColorHighVol : options.downColorLowVol)}, title=\"OKEX Spot Delta\")",
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
              "top": 0.8,
              "bottom": 0.1
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
          "script": "_vbuy = (BITFINEX:ARBUSD.vbuy+BITFINEX:ARBUST.vbuy)\n\n_vsell = (BITFINEX:ARBUSD.vsell+BITFINEX:ARBUST.vsell)\n\nvolume = _vbuy+_vsell\na = sma(Math.pow(volume,2),options.length)\nb = Math.pow(sum(volume,options.length),2)/Math.pow(options.length,2)\nstdev = Math.sqrt(a - b)\nbasis = sma(volume, options.length)\ndev = 1 * stdev\ntreshold = basis + dev\n\ndelta = _vbuy - _vsell\nis_delta_positive = delta > 0\nis_vol_sig = volume > treshold\nohlc = avg_ohlc(bar)\nis_candle_up = ohlc.close > ohlc.open\n\nplothistogram({ time: time, value: (delta), color: delta > 0 ? ( volume > treshold ? options.upColorHighVol : options.upColorLowVol) : ( volume > treshold ? options.downColorHighVol : options.downColorLowVol)}, title=\"BITFINEX Spot Delta\")",
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
              "top": 0.91,
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
            "bitfinex-spot-delta copy 1"
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
          "script": "_vbuy = (BITGET:ARBUSDT.vbuy)\n\n_vsell = (BITGET:ARBUSDT.vsell)\n\nvolume = _vbuy+_vsell\na = sma(Math.pow(volume,2),options.length)\nb = Math.pow(sum(volume,options.length),2)/Math.pow(options.length,2)\nstdev = Math.sqrt(a - b)\nbasis = sma(volume, options.length)\ndev = 1 * stdev\ntreshold = basis + dev\n\ndelta = _vbuy - _vsell\nis_delta_positive = delta > 0\nis_vol_sig = volume > treshold\nohlc = avg_ohlc(bar)\nis_candle_up = ohlc.close > ohlc.open\n\nplothistogram({ time: time, value: (delta), color: delta > 0 ? ( volume > treshold ? options.upColorHighVol : options.upColorLowVol) : ( volume > treshold ? options.downColorHighVol : options.downColorLowVol)}, title=\"BITGET Spot Delta\")",
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
              "top": 0.69,
              "bottom": 0.2
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
            "bitget-spot-delta copy 1"
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
        },
        "bybit-spot-delta": {
          "script": "_vbuy = (BYBIT:ARBUSDT-SPOT.vbuy)\n\n_vsell = (BYBIT:ARBUSDT-SPOT.vsell)\n\nvolume = _vbuy+_vsell\na = sma(Math.pow(volume,2),options.length)\nb = Math.pow(sum(volume,options.length),2)/Math.pow(options.length,2)\nstdev = Math.sqrt(a - b)\nbasis = sma(volume, options.length)\ndev = 1 * stdev\ntreshold = basis + dev\n\ndelta = _vbuy - _vsell\nis_delta_positive = delta > 0\nis_vol_sig = volume > treshold\nohlc = avg_ohlc(bar)\nis_candle_up = ohlc.close > ohlc.open\n\nplothistogram({ time: time, value: (delta), color: delta > 0 ? ( volume > treshold ? options.upColorHighVol : options.upColorLowVol) : ( volume > treshold ? options.downColorHighVol : options.downColorLowVol)}, title=\"BYBIT Spot Delta\")",
          "id": "bybit-spot-delta",
          "name": "BYBIT Spot Delta",
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
            "bybit-spot-delta copy 3"
          ],
          "displayName": "BYBIT Spot Delta",
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
        "kucoin-spot-delta": {
          "script": "_vbuy = (KUCOIN:ARB-USDT.vbuy)\n\n_vsell = (KUCOIN:ARB-USDT.vsell)\n\nvolume = _vbuy+_vsell\na = sma(Math.pow(volume,2),options.length)\nb = Math.pow(sum(volume,options.length),2)/Math.pow(options.length,2)\nstdev = Math.sqrt(a - b)\nbasis = sma(volume, options.length)\ndev = 1 * stdev\ntreshold = basis + dev\n\ndelta = _vbuy - _vsell\nis_delta_positive = delta > 0\nis_vol_sig = volume > treshold\nohlc = avg_ohlc(bar)\nis_candle_up = ohlc.close > ohlc.open\n\nplothistogram({ time: time, value: (delta), color: delta > 0 ? ( volume > treshold ? options.upColorHighVol : options.upColorLowVol) : ( volume > treshold ? options.downColorHighVol : options.downColorLowVol)}, title=\"KUCOIN Spot Delta\")",
          "id": "kucoin-spot-delta",
          "name": "KUCOIN Spot Delta",
          "options": {
            "priceScaleId": "kucoin-spot-delta",
            "upColor": "rgb(100,181,246)",
            "downColor": "rgb(236,64,122)",
            "visible": true,
            "upColorLowVol": "rgb(31,106,34)",
            "downColorLowVol": "rgb(108,17,24)",
            "upColorHighVol": "rgb(109,223,113)",
            "downColorHighVol": "rgb(220,34,50)",
            "length": 14,
            "scaleMargins": {
              "top": 0.46,
              "bottom": 0.43
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
            "kucoin-spot-delta copy 7"
          ],
          "displayName": "KUCOIN Spot Delta",
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
            "precision": 4,
            "minMove": 0.0001
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
            "top": 0.58,
            "bottom": 0.32
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
            "top": 0.34,
            "bottom": 0.56
          },
          "indicators": [
            "COINBASE Spot Delta"
          ]
        },
        "coinbase-spot-delta-copy-1": {
          "scaleMargins": {
            "top": 0.69,
            "bottom": 0.2
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
            "BYBIT Spot Delta"
          ]
        },
        "bybit-spot-delta-copy-1": {
          "scaleMargins": {
            "top": 0.8,
            "bottom": 0.1
          },
          "indicators": [
            "OKEX Spot Delta"
          ]
        },
        "bitfinex-spot-delta": {
          "scaleMargins": {
            "top": 0.91,
            "bottom": 0.01
          },
          "indicators": [
            "BITFINEX Spot Delta"
          ]
        },
        "kucoin-spot-delta": {
          "scaleMargins": {
            "top": 0.46,
            "bottom": 0.43
          },
          "indicators": [
            "KUCOIN Spot Delta"
          ]
        }
      },
      "layouting": false,
      "showIndicators": true,
      "timeframe": "900",
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
      "barSpacing": 7.172968663660935,
      "navigationState": {
        "tab": "script",
        "optionsQuery": "",
        "fontSizePx": 19
      },
      "_id": "chart copy 1"
    },
    "chart copy 2": {
      "indicatorsErrors": {},
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
              "precision": 4,
              "minMove": 0.0001
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
        "okex-usdt-swap": {
          "script": "_vbuy = (OKEX:ARB-USDT-SWAP.vbuy)\n\n_vsell = (OKEX:ARB-USDT-SWAP.vsell)\n\nvolume = _vbuy+_vsell\na = sma(Math.pow(volume,2),options.length)\nb = Math.pow(sum(volume,options.length),2)/Math.pow(options.length,2)\nstdev = Math.sqrt(a - b)\nbasis = sma(volume, options.length)\ndev = 1 * stdev\ntreshold = basis + dev\n\ndelta = _vbuy - _vsell\nis_delta_positive = delta > 0\nis_vol_sig = volume > treshold\nohlc = avg_ohlc(bar)\nis_candle_up = ohlc.close > ohlc.open\n\nplothistogram({ time: time, value: (delta), color: delta > 0 ? ( volume > treshold ? options.upColorHighVol : options.upColorLowVol) : ( volume > treshold ? options.downColorHighVol : options.downColorLowVol)}, title=\"OKEX Perp Delta\")",
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
              "top": 0.41,
              "bottom": 0.49
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
            "okex-usdt-swap"
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
        "bybit-perp-delta": {
          "script": "_vbuy = (BYBIT:ARBUSDT.vbuy)\n\n_vsell = (BYBIT:ARBUSDT.vsell)\n\nvolume = _vbuy+_vsell\na = sma(Math.pow(volume,2),options.length)\nb = Math.pow(sum(volume,options.length),2)/Math.pow(options.length,2)\nstdev = Math.sqrt(a - b)\nbasis = sma(volume, options.length)\ndev = 1 * stdev\ntreshold = basis + dev\n\ndelta = _vbuy - _vsell\nis_delta_positive = delta > 0\nis_vol_sig = volume > treshold\nohlc = avg_ohlc(bar)\nis_candle_up = ohlc.close > ohlc.open\n\nplothistogram({ time: time, value: (delta), color: delta > 0 ? ( volume > treshold ? options.upColorHighVol : options.upColorLowVol) : ( volume > treshold ? options.downColorHighVol : options.downColorLowVol)}, title=\"BYBIT Perp Delta\")",
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
              "top": 0.26,
              "bottom": 0.65
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
            "bybit-perp-delta copy 1"
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
          "script": "_vbuy = (BITMEX:ARBUSD.vbuy+BITMEX:ARBUSDT.vbuy)\n\n_vsell = (BITMEX:ARBUSD.vsell+BITMEX:ARBUSDT.vsell)\n\nvolume = _vbuy+_vsell\na = sma(Math.pow(volume,2),options.length)\nb = Math.pow(sum(volume,options.length),2)/Math.pow(options.length,2)\nstdev = Math.sqrt(a - b)\nbasis = sma(volume, options.length)\ndev = 1 * stdev\ntreshold = basis + dev\n\ndelta = _vbuy - _vsell\nis_delta_positive = delta > 0\nis_vol_sig = volume > treshold\nohlc = avg_ohlc(bar)\nis_candle_up = ohlc.close > ohlc.open\n\nplothistogram({ time: time, value: (delta), color: delta > 0 ? ( volume > treshold ? options.upColorHighVol : options.upColorLowVol) : ( volume > treshold ? options.downColorHighVol : options.downColorLowVol)}, title=\"BITMEX Perp Delta\")",
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
              "top": 0.85,
              "bottom": 0.05
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
        "bitget-usdt-perp": {
          "script": "_vbuy = (BITGET:ARBUSDT_UMCBL.vbuy)\n\n_vsell = (BITGET:ARBUSDT_UMCBL.vsell)\n\nvolume = _vbuy+_vsell\na = sma(Math.pow(volume,2),options.length)\nb = Math.pow(sum(volume,options.length),2)/Math.pow(options.length,2)\nstdev = Math.sqrt(a - b)\nbasis = sma(volume, options.length)\ndev = 1 * stdev\ntreshold = basis + dev\n\ndelta = _vbuy - _vsell\nis_delta_positive = delta > 0\nis_vol_sig = volume > treshold\nohlc = avg_ohlc(bar)\nis_candle_up = ohlc.close > ohlc.open\n\nplothistogram({ time: time, value: (delta), color: delta > 0 ? ( volume > treshold ? options.upColorHighVol : options.upColorLowVol) : ( volume > treshold ? options.downColorHighVol : options.downColorLowVol)}, title=\"BITGET USDT Perp\")",
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
              "top": 0.69,
              "bottom": 0.19
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
            "bitget-usdt-perp"
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
        },
        "kucoin-perp-delta": {
          "script": "_vbuy = (KUCOIN:ARBUSDTM.vbuy)\n\n_vsell = (KUCOIN:ARBUSDTM.vsell)\n\nvolume = _vbuy+_vsell\na = sma(Math.pow(volume,2),options.length)\nb = Math.pow(sum(volume,options.length),2)/Math.pow(options.length,2)\nstdev = Math.sqrt(a - b)\nbasis = sma(volume, options.length)\ndev = 1 * stdev\ntreshold = basis + dev\n\ndelta = _vbuy - _vsell\nis_delta_positive = delta > 0\nis_vol_sig = volume > treshold\nohlc = avg_ohlc(bar)\nis_candle_up = ohlc.close > ohlc.open\n\nplothistogram({ time: time, value: (delta), color: delta > 0 ? ( volume > treshold ? options.upColorHighVol : options.upColorLowVol) : ( volume > treshold ? options.downColorHighVol : options.downColorLowVol)}, title=\"KUCOIN Perp Delta\")",
          "id": "kucoin-perp-delta",
          "name": "KUCOIN Perp Delta",
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
              "top": 0.54,
              "bottom": 0.36
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
            "kucoin-perp-delta copy 1"
          ],
          "displayName": "KUCOIN Perp Delta",
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
        }
      },
      "priceScales": {
        "right": {
          "scaleMargins": {
            "top": 0,
            "bottom": 0.79
          },
          "priceFormat": {
            "precision": 4,
            "minMove": 0.0001
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
            "top": 0.69,
            "bottom": 0.19
          },
          "indicators": [
            "BITGET USDT PERP"
          ]
        },
        "binance-btc-usd-delta-copy-5": {
          "scaleMargins": {
            "top": 0.41,
            "bottom": 0.49
          },
          "indicators": [
            "OKEX USDT SWAP "
          ]
        },
        "binance-perp-delta-copy-1": {
          "scaleMargins": {
            "top": 0.26,
            "bottom": 0.65
          },
          "indicators": [
            "BYBIT Perp Delta"
          ]
        },
        "bitmex-perp-delta": {
          "scaleMargins": {
            "top": 0.85,
            "bottom": 0.05
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
            "top": 0.54,
            "bottom": 0.36
          },
          "indicators": [
            "KUCOIN Perp Delta"
          ]
        }
      },
      "layouting": false,
      "showIndicators": true,
      "timeframe": "900",
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
      "barSpacing": 7.397804826259062,
      "navigationState": {
        "tab": "script",
        "optionsQuery": "",
        "fontSizePx": 16
      },
      "_id": "chart copy 2"
    },
    "trades": {
      "liquidations": [
        {
          "id": "liquidation_threshold",
          "amount": 500,
          "buyColor": "rgba(236,64,122,0.5)",
          "sellColor": "rgba(255,152,0,0.5)",
          "buyAudio": "var srqtR = Math.min(1, gain / 4)\nplay(329.63, srqtR, srqtR*2,0,,,'sine')\nplay(329.63, srqtR, srqtR*4,0.08,,,'sine')",
          "sellAudio": "var srqtR = Math.min(1, gain / 6)\nplay(440, srqtR, srqtR*2,0,,,'sine')\nplay(440, srqtR, srqtR*4,0.08,,,'sine')"
        },
        {
          "id": "liquidation_significant",
          "amount": 1000,
          "buyColor": "rgba(236,64,122,0.6)",
          "sellColor": "rgba(255,152,0,0.7)",
          "buyAudio": "var srqtR = Math.min(1, gain / 4)\nplay(329.63, srqtR, srqtR*4,0,,,'sine')\nplay(329.63, srqtR, srqtR*6,0.08,,,'sine')",
          "sellAudio": "var srqtR = Math.min(1, gain / 6)\nplay(440, srqtR, srqtR*4,0,,,'sine')\nplay(440, srqtR, srqtR*6,0.08,,,'sine')"
        },
        {
          "id": "liquidation_huge",
          "amount": 2000,
          "buyGif": "flying money",
          "sellGif": "flying money",
          "buyColor": "rgba(236,64,122,0.7)",
          "sellColor": "rgba(255,152,0,0.8)",
          "buyAudio": "var srqtR = Math.min(1, gain / 4)\nplay(329.63, srqtR, srqtR*4,0,,,'sine')\nplay(329.63, srqtR, srqtR*8,0.08,,,'sine')",
          "sellAudio": "var srqtR = Math.min(1, gain / 6)\nplay(440, srqtR, srqtR*4,0,,,'sine')\nplay(440, srqtR, srqtR*8,0.08,,,'sine')"
        },
        {
          "id": "liquidation_rare",
          "amount": 10000,
          "buyGif": "explosion",
          "sellGif": "explosion",
          "buyColor": "rgb(156,39,176)",
          "sellColor": "rgb(255,235,59)",
          "buyAudio": "var srqtR = Math.min(1, gain / 10)\nplay(329.63, srqtR, 1,0,,,'sine')\nplay(329.63, srqtR, srqtR*10,0.08,,,'sine')",
          "sellAudio": "var srqtR = Math.min(1, gain / 10)\nplay(440, srqtR, 1,0,,,'sine')\nplay(440, srqtR, srqtR*10,0.08,,,'sine')"
        }
      ],
      "thresholds": [
        {
          "id": "threshold",
          "amount": 1000,
          "buyColor": "rgba(119, 148, 92, 0.25)",
          "sellColor": "rgba(239, 67, 82, 0.25)",
          "buyAudio": "play(659.26, gain / 10, 0.1 + gain / 7)",
          "sellAudio": "play(493.88, gain * 1.5 / 10, 0.1 + gain / 7)"
        },
        {
          "id": "significant",
          "amount": 2500,
          "buyColor": "rgb(100, 157, 102)",
          "sellColor": "rgb(239, 67, 82)",
          "buyAudio": "play(659.26, 0.05 + gain / 10, 0.2 + ratio * 0.23,0,,0); play(830.6, 0.05 + gain / 10, 0.2 + ratio * 0.23, 0.08,,0)",
          "sellAudio": "play(493.88, 0.05 + gain * 1.5 / 10, 0.2 + ratio * 0.23,0,,0); play(392, 0.05 + gain * 1.5 / 10, 0.2 + ratio * 0.23, 0.08,,0)"
        },
        {
          "id": "huge",
          "amount": 10000,
          "buyGif": "cash bullish",
          "sellGif": "cash bearish",
          "buyColor": "rgb(59, 202, 109)",
          "sellColor": "rgb(235, 30, 47)",
          "buyAudio": "play(659.26, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0,,0); play(830.6, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0.08,,0); play(987.76, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0.16,,0); play(1318.52, 0.05 + gain / 10, 0.1 + ratio * 0.23, 0.24,,0)",
          "sellAudio": "play(493.88, 0.05 + gain / 25, 0.1 + ratio * 0.23, 0,,0); play(369.99, 0.05 + gain * 1.5 / 10, 0.2, 0.08,,0); play(293.66, 0.05 + gain * 1.5 / 10, 0.2, 0.16,,0); play(246.94, 0.05 + gain * 1.5 / 10, 0.1 + ratio * 0.23, 0.24,,0)"
        },
        {
          "id": "rare",
          "amount": 100000,
          "buyGif": "explosion",
          "sellGif": "explosion",
          "buyColor": "rgb(0, 255, 127)",
          "sellColor": "rgb(217, 31, 28)",
          "buyAudio": "play(659.26, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(830.6, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.08,,0); play(987.76, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0.16,,0); play(1318.52, 0.05 + gain / 10, 0.1 + ratio * 0.13, 0.24,,0)",
          "sellAudio": "play(493.88, 0.05 + gain / 25, 0.1 + ratio * 0.13, 0,,0); play(369.99, 0.05 + gain * 1.5 / 10, 0.2, 0.08,,0); play(293.66, 0.05 + gain * 1.5 / 10, 0.2, 0.16,,0); play(246.94, 0.05 + gain * 1.5 / 10, 0.1 + ratio * 0.13, 0.24,,0)"
        }
      ],
      "audioThreshold": null,
      "multipliers": {},
      "maxRows": 100,
      "muted": false,
      "audioPitch": null,
      "audioVolume": null,
      "showPairs": false,
      "showTrades": true,
      "showLiquidations": true,
      "showLogos": true,
      "monochromeLogos": false,
      "showTimeAgo": true,
      "showPrices": true,
      "showHistograms": true,
      "thresholdsMultipler": 0.01,
      "_id": "trades",
      "tradeType": "trades"
    }
  },
  "createdAt": 1695692522735,
  "updatedAt": 1695847125240
}

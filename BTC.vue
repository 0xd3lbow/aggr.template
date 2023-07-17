{
  "version": 7,
  "createdAt": 1673293820001,
  "updatedAt": 1689633236905,
  "name": "Aggr-Bitcoin",
  "id": "72tu",
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
            "BINANCE_FUTURES:btcusd_perp",
            "BITFINEX:BTCUSD",
            "BITMEX:XBTUSD",
            "BYBIT:BTCUSD",
            "COINBASE:BTC-USD",
            "DERIBIT:BTC-PERPETUAL",
            "BINANCE:btcusdt",
            "BINANCE_FUTURES:btcusdt",
            "BINANCE:btcbusd",
            "BINANCE_FUTURES:btcbusd",
            "BITFINEX:BTCUST",
            "BITFINEX:BTCF0:USTF0",
            "BITMEX:XBTUSDT",
            "BYBIT:BTCUSDT",
            "COINBASE:BTC-USDT",
            "BITSTAMP:btcusd",
            "KRAKEN:PI_XBTUSD",
            "OKEX:BTC-USD-SWAP",
            "OKEX:BTC-USDT-SWAP"
          ],
          "zoom": 1.25
        },
        "trades": {
          "id": "trades",
          "name": "",
          "type": "trades",
          "markets": [
            "BINANCE_FUTURES:btcusd_perp",
            "BITFINEX:BTCUSD",
            "BITMEX:XBTUSD",
            "BYBIT:BTCUSD",
            "COINBASE:BTC-USD",
            "DERIBIT:BTC-PERPETUAL",
            "BINANCE:btcusdt",
            "BINANCE_FUTURES:btcusdt",
            "BINANCE:btcbusd",
            "BINANCE_FUTURES:btcbusd",
            "BITFINEX:BTCUST",
            "BITFINEX:BTCF0:USTF0",
            "BITMEX:XBTUSDT",
            "BYBIT:BTCUSDT",
            "COINBASE:BTC-USDT",
            "BITSTAMP:btcusd",
            "KRAKEN:PI_XBTUSD",
            "OKEX:BTC-USD-SWAP",
            "OKEX:BTC-USDT-SWAP"
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
        "liquidations": {
          "id": "liquidations",
          "name": "REKTS",
          "type": "trades",
          "markets": [
            "BITFINEX:BTCUSD",
            "BITMEX:XBTUSD",
            "BITMEX:XBTUSDT",
            "BITFINEX:BTCF0:USTF0",
            "BINANCE_FUTURES:btcusdt",
            "BINANCE_FUTURES:btcbusd",
            "BINANCE_FUTURES:btcusd_perp",
            "DERIBIT:BTC-PERPETUAL",
            "BYBIT:BTCUSD",
            "BYBIT:BTCUSDT",
            "KRAKEN:PI_XBTUSD",
            "OKEX:BTC-USD-SWAP",
            "OKEX:BTC-USDT-SWAP"
          ],
          "settings": {
            "tradeType": "liquidations"
          },
          "zoom": 1.25
        }
      },
      "layout": [
        {
          "i": "chart",
          "type": "chart",
          "x": 0,
          "y": 0,
          "w": 20,
          "h": 24,
          "moved": false
        },
        {
          "i": "trades",
          "type": "trades",
          "x": 20,
          "y": 0,
          "w": 4,
          "h": 22,
          "moved": false
        },
        {
          "i": "liquidations",
          "type": "trades",
          "x": 20,
          "y": 22,
          "w": 4,
          "h": 2,
          "moved": false
        }
      ]
    },
    "chart": {
      "indicatorsErrors": {
        "futures-delta": null
      },
      "indicators": {
        "cvd": {
          "enabled": true,
          "name": "CVD",
          "description": "Cumulative Volume Delta",
          "script": "plotline(cum(vbuy - vsell))",
          "options": {
            "priceScaleId": "cvd",
            "priceFormat": {
              "type": "volume"
            },
            "color": "#3BCA6D",
            "scaleMargins": {
              "top": 0.84,
              "bottom": 0
            },
            "visible": true
          },
          "id": "cvd",
          "createdAt": 1673293819993,
          "updatedAt": null,
          "series": [
            "cvd"
          ]
        },
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
          "createdAt": 1673293819993,
          "updatedAt": null,
          "series": [
            "liquidations copy 1",
            "iylpm5dx"
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
              "precision": 1
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
              "top": 0.04,
              "bottom": 0.52
            }
          },
          "id": "price",
          "createdAt": 1673293819993,
          "updatedAt": null,
          "series": [
            "price"
          ]
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
          "createdAt": 1673293819993,
          "updatedAt": null,
          "series": [
            "volume",
            "5bxctjfb"
          ]
        },
        "btccvdperp": {
          "script": "line(cum((BINANCE_FUTURES:btcusdt.vbuy+BINANCE_FUTURES:btcusd_perp.vbuy+BITFINEX:BTCF0:USTF0.vbuy+BITMEX:XBTUSD.vbuy+BYBIT:BTCUSD.vbuy+BYBIT:BTCUSDT.vbuy+DERIBIT:BTC-PERPETUAL.vbuy+FTX:BTC-PERP.vbuy+HUOBI:BTC-USD.vbuy+KRAKEN:PI_XBTUSD.vbuy+OKEX:BTC-USDT-SWAP.vbuy+OKEX:BTC-USD-SWAP.vbuy)- (BINANCE_FUTURES:btcusdt.vsell+BINANCE_FUTURES:btcusd_perp.vsell+BITFINEX:BTCF0:USTF0.vsell+BITMEX:XBTUSD.vsell+BYBIT:BTCUSD.vsell+BYBIT:BTCUSDT.vsell+DERIBIT:BTC-PERPETUAL.vsell+FTX:BTC-PERP.vsell+HUOBI:BTC-USD.vsell+KRAKEN:PI_XBTUSD.vsell+OKEX:BTC-USDT-SWAP.vsell+OKEX:BTC-USD-SWAP.vsell)), title=CVD:BTC:PERP)",
          "name": "CVD (BTC PERP)",
          "description": "CVD specific markets",
          "options": {
            "priceScaleId": "cvdperp",
            "priceFormat": {
              "type": "volume"
            },
            "color": "#42a5f5",
            "visible": true,
            "scaleMargins": {
              "top": 0.04,
              "bottom": 0.52
            }
          },
          "id": "btccvdperp",
          "createdAt": 1673293819993,
          "updatedAt": null,
          "series": [
            "btccvdperp"
          ],
          "displayName": "CVD (BTC PERP)"
        },
        "btccvdspot": {
          "script": "line(cum((BINANCE:btcusdt.vbuy+BINANCE:btcusdc.vbuy+BITFINEX:BTCUSD.vbuy+BITSTAMP:btcusd.vbuy+BITSTAMP:btcusdt.vbuy+BITSTAMP:btcusdc.vbuy+COINBASE:BTC-USDC.vbuy+COINBASE:BTC-USD.vbuy+COINBASE:BTC-USDT.vbuy+FTX:BTC/USD.vbuy+FTX:BTC/USDT.vbuy+HUOBI:btcusdt.vbuy+HUOBI:btcusdc.vbuy+KRAKEN:XBT/USDC.vbuy+KRAKEN:XBT/USDT.vbuy+KRAKEN:XBT/USD.vbuy+OKEX:BTC-USDT.vbuy+OKEX:BTC-USDC.vbuy+POLONIEX:BTC_USDT.vbuy+POLONIEX:USDC_BTC.vbuy)-(BINANCE:btcusdt.vsell+BINANCE:btcusdc.vsell+BITFINEX:BTCUSD.vsell+BITSTAMP:btcusd.vsell+BITSTAMP:btcusdt.vsell+BITSTAMP:btcusdc.vsell+COINBASE:BTC-USDC.vsell+COINBASE:BTC-USD.vsell+COINBASE:BTC-USDT.vsell+FTX:BTC/USD.vsell+FTX:BTC/USDT.vsell+HUOBI:btcusdt.vsell+HUOBI:btcusdc.vsell+KRAKEN:XBT/USDC.vsell+KRAKEN:XBT/USDT.vsell+KRAKEN:XBT/USD.vsell+OKEX:BTC-USDT.vsell+OKEX:BTC-USDC.vsell+POLONIEX:BTC_USDT.vsell+POLONIEX:USDC_BTC.vsell)), title=CVD:BTC:SPOT)",
          "name": "CVD (BTC SPOT)",
          "description": "CVD specific markets",
          "options": {
            "priceScaleId": "cvdspot",
            "priceFormat": {
              "type": "volume"
            },
            "color": "#4caf50",
            "visible": true,
            "scaleMargins": {
              "top": 0.04,
              "bottom": 0.52
            }
          },
          "id": "btccvdspot",
          "createdAt": 1673293819993,
          "updatedAt": null,
          "series": [
            "btccvdspot"
          ],
          "displayName": "CVD (BTC SPOT)"
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
            "spot-delta copy 21"
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
          "updatedAt": 1686940629384,
          "preview": {}
        },
        "futures-delta": {
          "script": "_vbuy = (BINANCE_FUTURES:btcusd_perp.vbuy+BINANCE_FUTURES:btcusdt.vbuy+BINANCE_FUTURES:btcbusd.vbuy+BITMEX:XBTUSD.vbuy+BYBIT:BTCUSD.vbuy+DERIBIT:BTC-PERPETUAL.vbuy+BITFINEX:BTCFO:USTFO.vbuy+BITMEX:XBTUSDT.vbuy+BYBIT:BTCUSDT.vbuy+KRAKEN:PI_XBTUSD.vbuy+OKEX:BTC-USD-SWAP.vbuy+OKEX:BTC-USDT-SWAP.vbuy)\n_vsell = (BINANCE_FUTURES:btcusd_perp.vsell+BINANCE_FUTURES:btcusdt.vsell+BINANCE_FUTURES:btcbusd.vsell+BITMEX:XBTUSD.vsell+BYBIT:BTCUSD.vsell+DERIBIT:BTC-PERPETUAL.vsell+BITFINEX:BTCFO:USTFO.vsell+BITMEX:XBTUSDT.vsell+BYBIT:BTCUSDT.vsell+KRAKEN:PI_XBTUSD.vsell+OKEX:BTC-USD-SWAP.vsell+OKEX:BTC-USDT-SWAP.vsell)\n\nvolume = _vbuy+_vsell\na = sma(Math.pow(volume,2),options.length)\nb = Math.pow(sum(volume,options.length),2)/Math.pow(options.length,2)\nstdev = Math.sqrt(a - b)\nbasis = sma(volume, options.length)\ndev = 1 * stdev\ntreshold = basis + dev\n\ndelta = _vbuy - _vsell\n\nplothistogram({ time: time, value: (delta), color: delta > 0 ? ( volume > treshold ? options.upColorHighVol : options.upColorLowVol) : ( volume > treshold ? options.downColorHighVol : options.downColorLowVol)}, title=\"Futures Delta\")",
          "id": "futures-delta",
          "name": "Futures Delta",
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
            "futures-delta copy 9"
          ],
          "displayName": "Futures Delta",
          "createdAt": 1657705213969,
          "updatedAt": 1686940589333,
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
        }
      },
      "priceScales": {
        "right": {
          "scaleMargins": {
            "top": 0.04,
            "bottom": 0.52
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
            "top": 0.04,
            "bottom": 0.52
          },
          "indicators": [
            "CVD (BTC PERP)"
          ]
        },
        "cvdspot": {
          "scaleMargins": {
            "top": 0.04,
            "bottom": 0.52
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
        "BINANCE_FUTURES:btcusd_perp": false,
        "BITMEX:XBTUSD": false,
        "BYBIT:BTCUSD": false,
        "DERIBIT:BTC-PERPETUAL": false,
        "BINANCE_FUTURES:btcusdt": false,
        "BINANCE_FUTURES:btcbusd": false,
        "BITFINEX:BTCF0:USTF0": false,
        "BITMEX:XBTUSDT": false,
        "BYBIT:BTCUSDT": false,
        "KRAKEN:PI_XBTUSD": false,
        "OKEX:BTC-USD-SWAP": false,
        "OKEX:BTC-USDT-SWAP": false,
        "BITFINEX:BTCUST": false,
        "BITFINEX:BTCUSD": false,
        "COINBASE:BTC-USD": false,
        "BINANCE:btcusdt": false,
        "BINANCE:btcbusd": false,
        "COINBASE:BTC-USDT": false,
        "BITSTAMP:btcusd": false
      },
      "barSpacing": 6.145900472432549,
      "navigationState": {
        "tab": "script",
        "optionsQuery": "",
        "fontSizePx": 17
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
        "settings-trades",
        "indicator-right-script",
        "indicator-right-format",
        "indicator-right-scale",
        "indicator-right-default",
        "indicator-right-colors",
        "timeframe-hours",
        "search-exchanges",
        "search-type",
        "settings-workspaces"
      ],
      "searchTypes": {
        "recentSearches": true,
        "historical": true,
        "spots": true,
        "perpetuals": true,
        "futures": false,
        "normalize": true,
        "mergeUsdt": true
      },
      "searchQuotes": {},
      "previousSearchSelections": [],
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
    }
  }
}

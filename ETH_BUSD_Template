{
  "version": 7,
  "createdAt": 1681540830716,
  "updatedAt": 1681598767002,
  "name": "ETHBUSDTerminal",
  "id": "ethbusdterminal",
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
            "BINANCE_FUTURES:ethbusd",
            "BINANCE_FUTURES:ethusd_perp",
            "BINANCE_FUTURES:ethusdt",
            "BINANCE:ethbusd",
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
            "OKEX:ETH-USD-SWAP",
            "OKEX:ETH-USDC",
            "OKEX:ETH-USDC-SWAP",
            "OKEX:ETH-USDT",
            "OKEX:ETH-USDT-SWAP"
          ]
        },
        "trades": {
          "id": "trades",
          "name": "",
          "type": "trades",
          "markets": [
            "BINANCE_FUTURES:ethbusd",
            "BINANCE_FUTURES:ethusd_perp",
            "BINANCE_FUTURES:ethusdt",
            "BINANCE:ethbusd",
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
            "OKEX:ETH-USD-SWAP",
            "OKEX:ETH-USDC",
            "OKEX:ETH-USDC-SWAP",
            "OKEX:ETH-USDT",
            "OKEX:ETH-USDT-SWAP"
          ],
          "settings": {
            "showLiquidations": false
          }
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
          "h": 24,
          "moved": false
        }
      ]
    },
    "chart": {
      "indicatorsErrors": {},
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
            "upColor": "rgb(242,54,69)",
            "downColor": "rgb(8,153,129)",
            "scaleMargins": {
              "top": 0.75,
              "bottom": 0.17
            },
            "visible": false,
            "priceLineVisible": false,
            "lastValueVisible": true
          },
          "id": "liquidations",
          "createdAt": 1677551117097,
          "updatedAt": 1681507921171,
          "series": [
            "liquidations",
            "uw1hgtmx"
          ],
          "unsavedChanges": false,
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
              "precision": 2,
              "minMove": 0.01
            },
            "priceLineVisible": true,
            "lastValueVisible": true,
            "borderVisible": true,
            "upColor": "rgb(8,153,129)",
            "downColor": "rgb(242,54,69)",
            "borderUpColor": "rgb(8,153,129)",
            "borderDownColor": "rgb(242,54,69)",
            "wickUpColor": "rgb(8,153,129)",
            "wickDownColor": "rgb(242,54,69)",
            "useGaps": false,
            "useHeikinAshi": false,
            "visible": true
          },
          "id": "price",
          "createdAt": 1677551117097,
          "updatedAt": 1681507874542,
          "series": [
            "price"
          ],
          "preview": {},
          "unsavedChanges": true,
          "lastPreset": null
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
            "downBgColor": "rgba(235,30,47,0.5)",
            "visible": false
          },
          "id": "volume",
          "createdAt": 1677551117097,
          "updatedAt": null,
          "series": [
            "volume",
            "hjigxe4j"
          ]
        },
        "busd-spot-delta copy 1": {
          "script": "_vbuy = (BINANCE:ethbusd.vbuy)\r\n\r\n_vsell = (BINANCE:ethbusd.vsell)\r\n\r\nvolume = _vbuy+ _vsell\r\na = sma(Math.pow(volume, 2), options.length)\r\nb = Math.pow(sum(volume, options.length), 2) / Math.pow(options.length, 2)\r\nstdev = Math.sqrt(a - b)\r\nbasis = sma(volume, options.length)\r\ndev = 1 * stdev\r\ntreshold = basis + dev\r\n\r\ndelta = _vbuy - _vsell\r\npos_delta = delta > 0\r\nweighted_vol = volume > treshold\r\nohlc = avg_ohlc(bar)\r\nclose_above = ohlc.close > ohlc.open\r\n\r\ncol = pos_delta ? (weighted_vol ? (close_above ? options.upColorHighVol : options.divColorSigUp) : (close_above ? options.upColorLowVol : options.divColorSmallUp)) : (weighted_vol ? (close_above ? options.divColorSigDown : options.downColorHighVol) : (close_above ? options.divColorSmallDown : options.downColorLowVol))\r\n\r\nplothistogram({ time: time, value: (delta), color: col, overlay: true }, title=\"BUSD Spot Delta\")",
          "name": "BUSD Spot Delta",
          "priceScaleId": "right",
          "id": "busd-spot-delta copy 1",
          "options": {
            "priceScaleId": "busd-spot-delta copy 1",
            "length": 14,
            "divColorSigDown": "rgb(156,39,176)",
            "divColorSigUp": "rgb(156,39,176)",
            "divColorSmallDown": "rgb(242,54,69)",
            "divColorSmallUp": "rgb(255,235,59)",
            "downColorHighVol": "rgb(242,54,69)",
            "downColorLowVol": "rgb(242,54,69)",
            "upColorHighVol": "rgb(255,235,59)",
            "upColorLowVol": "rgb(255,235,59)",
            "visible": true
          },
          "series": [
            "busd-spot-delta copy 1"
          ],
          "displayName": "BUSD Spot Delta",
          "unsavedChanges": true,
          "preview": {},
          "createdAt": 1681520581346,
          "updatedAt": 1681520581346
        },
        "busd-perp-delta1": {
          "script": "_vbuy = (BINANCE_FUTURES:ethbusd.vbuy)\r\n\r\n_vsell = (BINANCE_FUTURES:ethbusd.vsell)\r\n\r\nvolume = _vbuy+ _vsell\r\na = sma(Math.pow(volume, 2), options.length)\r\nb = Math.pow(sum(volume, options.length), 2) / Math.pow(options.length, 2)\r\nstdev = Math.sqrt(a - b)\r\nbasis = sma(volume, options.length)\r\ndev = 1 * stdev\r\ntreshold = basis + dev\r\n\r\ndelta = _vbuy - _vsell\r\npos_delta = delta > 0\r\nweighted_vol = volume > treshold\r\nohlc = avg_ohlc(bar)\r\nclose_above = ohlc.close > ohlc.open\r\n\r\ncol = pos_delta ? (weighted_vol ? (close_above ? options.upColorHighVol : options.divColorSigUp) : (close_above ? options.upColorLowVol : options.divColorSmallUp)) : (weighted_vol ? (close_above ? options.divColorSigDown : options.downColorHighVol) : (close_above ? options.divColorSmallDown : options.downColorLowVol))\r\n\r\nplothistogram({ time: time, value: (delta), color: col, overlay: true }, title=\"BUSD Perp Delta\")",
          "name": "BUSD Perp Delta",
          "priceScaleId": "right",
          "id": "busd-perp-delta1",
          "options": {
            "priceScaleId": "busd-perp-delta1",
            "length": 14,
            "divColorSigDown": "rgb(156,39,176)",
            "divColorSigUp": "rgb(156,39,176)",
            "divColorSmallDown": "rgb(242,54,69)",
            "divColorSmallUp": "rgb(255,235,59)",
            "downColorHighVol": "rgb(242,54,69)",
            "downColorLowVol": "rgb(242,54,69)",
            "upColorHighVol": "rgb(255,235,59)",
            "upColorLowVol": "rgb(255,235,59)"
          },
          "series": [
            "busd-perp-delta3"
          ],
          "displayName": "BUSD Perp Delta",
          "unsavedChanges": false,
          "preview": {},
          "createdAt": 1681520575832,
          "updatedAt": 1681520575832
        },
        "usdt-spot-delta2": {
          "script": "_vbuy = (BINANCE:ethusdt.vbuy)\r\n\r\n_vsell = (BINANCE:ethusdt.vsell)\r\n\r\nvolume = _vbuy+ _vsell\r\na = sma(Math.pow(volume, 2), options.length)\r\nb = Math.pow(sum(volume, options.length), 2) / Math.pow(options.length, 2)\r\nstdev = Math.sqrt(a - b)\r\nbasis = sma(volume, options.length)\r\ndev = 1 * stdev\r\ntreshold = basis + dev\r\n\r\ndelta = _vbuy - _vsell\r\npos_delta = delta > 0\r\nweighted_vol = volume > treshold\r\nohlc = avg_ohlc(bar)\r\nclose_above = ohlc.close > ohlc.open\r\n\r\ncol = pos_delta ? (weighted_vol ? (close_above ? options.upColorHighVol : options.divColorSigUp) : (close_above ? options.upColorLowVol : options.divColorSmallUp)) : (weighted_vol ? (close_above ? options.divColorSigDown : options.downColorHighVol) : (close_above ? options.divColorSmallDown : options.downColorLowVol))\r\n\r\nplothistogram({ time: time, value: (delta), color: col, overlay: true }, title=\"Binance USDT Spot Delta\")",
          "name": "USDT Spot Delta",
          "priceScaleId": "right",
          "id": "usdt-spot-delta2",
          "options": {
            "priceScaleId": "usdt-spot-delta2",
            "length": 14,
            "divColorSigDown": "rgb(156,39,176)",
            "divColorSigUp": "rgb(156,39,176)",
            "divColorSmallDown": "rgb(242,54,69)",
            "divColorSmallUp": "rgb(8,153,129)",
            "downColorHighVol": "rgb(242,54,69)",
            "downColorLowVol": "rgb(242,54,69)",
            "upColorHighVol": "rgb(8,153,129)",
            "upColorLowVol": "rgb(8,153,129)"
          },
          "series": [
            "usdt-spot-delta2"
          ],
          "displayName": "USDT Spot Delta",
          "unsavedChanges": true
        },
        "usdt-perp-delta1": {
          "script": "_vbuy = (BINANCE_FUTURES:ethusdt.vbuy+BINANCE_FUTURES:ethusd_perp.vbuy)\r\n\r\n_vsell = (BINANCE_FUTURES:ethusdt.vsell+BINANCE_FUTURES:ethusd_perp.vsell)\r\n\r\nvolume = _vbuy+ _vsell\r\na = sma(Math.pow(volume, 2), options.length)\r\nb = Math.pow(sum(volume, options.length), 2) / Math.pow(options.length, 2)\r\nstdev = Math.sqrt(a - b)\r\nbasis = sma(volume, options.length)\r\ndev = 1 * stdev\r\ntreshold = basis + dev\r\n\r\ndelta = _vbuy - _vsell\r\npos_delta = delta > 0\r\nweighted_vol = volume > treshold\r\nohlc = avg_ohlc(bar)\r\nclose_above = ohlc.close > ohlc.open\r\n\r\ncol = pos_delta ? (weighted_vol ? (close_above ? options.upColorHighVol : options.divColorSigUp) : (close_above ? options.upColorLowVol : options.divColorSmallUp)) : (weighted_vol ? (close_above ? options.divColorSigDown : options.downColorHighVol) : (close_above ? options.divColorSmallDown : options.downColorLowVol))\r\n\r\nplothistogram({ time: time, value: (delta), color: col, overlay: true }, title=\"Binance USDT Perp Delta\")",
          "name": "USDT Perp Delta",
          "priceScaleId": "right",
          "id": "usdt-perp-delta1",
          "options": {
            "priceScaleId": "usdt-perp-delta1",
            "length": 14,
            "divColorSigDown": "rgb(156,39,176)",
            "divColorSigUp": "rgb(156,39,176)",
            "divColorSmallDown": "rgb(242,54,69)",
            "divColorSmallUp": "rgb(8,153,129)",
            "downColorHighVol": "rgb(242,54,69)",
            "downColorLowVol": "rgb(242,54,69)",
            "upColorHighVol": "rgb(8,153,129)",
            "upColorLowVol": "rgb(8,153,129)"
          },
          "series": [
            "usdt-perp-delta1"
          ],
          "displayName": "USDT Perp Delta",
          "unsavedChanges": true,
          "createdAt": 1681521087982,
          "updatedAt": 1681521087982
        },
        "busd-spot-cvd": {
          "script": "line(cum(((BINANCE:ethbusd.vbuy))-(BINANCE:ethbusd.vsell)), title=BUSD Spot CVD)",
          "name": "BUSD Spot CVD",
          "priceScaleId": "right",
          "id": "busd-spot-cvd",
          "options": {
            "priceScaleId": "busd-spot-cvd"
          },
          "series": [
            "busd-spot-cvd"
          ],
          "displayName": "BUSD Spot CVD",
          "unsavedChanges": true,
          "preview": {},
          "createdAt": 1681258485170,
          "updatedAt": 1681258623676
        },
        "busd-perp-cvd": {
          "script": "line(cum(((BINANCE_FUTURES:ethbusd.vbuy))-(BINANCE_FUTURES:ethbusd.vsell)), title=BUSD Perp CVD)",
          "name": "BUSD Perp CVD",
          "priceScaleId": "right",
          "id": "busd-perp-cvd",
          "options": {
            "priceScaleId": "busd-perp-cvd"
          },
          "series": [
            "busd-perp-cvd"
          ],
          "displayName": "BUSD Perp CVD",
          "unsavedChanges": true,
          "preview": {},
          "createdAt": 1681258609651,
          "updatedAt": 1681258617062
        },
        "usdt-spot-cvd": {
          "script": "line(cum((BINANCE:ethusdt.vbuy)-(BINANCE:ethusdt.vsell)), title=BSpot CVD)",
          "name": "USDT Spot CVD",
          "priceScaleId": "right",
          "id": "usdt-spot-cvd",
          "options": {
            "priceScaleId": "spot-usdt-cvd",
            "visible": true
          },
          "series": [
            "usdt-spot-cvd"
          ],
          "displayName": "USDT Spot CVD",
          "unsavedChanges": true,
          "preview": {},
          "createdAt": 1681258836392,
          "updatedAt": 1681258882672
        },
        "usdt-perp-cvd": {
          "script": "line(cum(((BINANCE_FUTURES:ethusdt.vbuy+BINANCE_FUTURES:ethusd_perp.vbuy))-(BINANCE_FUTURES:ethusdt.vsell+BINANCE_FUTURES:ethusd_perp.vsell)), title=BPerp CVD)",
          "name": "USDT Perp CVD ",
          "priceScaleId": "right",
          "id": "usdt-perp-cvd",
          "options": {
            "priceScaleId": "busd-spot-cvd-candle",
            "length": 14,
            "useGaps": null,
            "useHeikinAshi": null
          },
          "series": [
            "usdt-perp-cvd"
          ],
          "displayName": "USDT Perp CVD ",
          "unsavedChanges": true,
          "preview": {},
          "createdAt": 1681257955627,
          "updatedAt": 1681258814685
        },
        "usdt-cvd": {
          "script": "line(cum((BINANCE:ethusdt.vbuy + BINANCE_FUTURES:ethusdt.vbuy + BINANCE_FUTURES:ethusd_perp.vbuy)-(BINANCE:ethusdt.vsell + BINANCE_FUTURES:ethusdt.vsell + BINANCE_FUTURES:ethusd_perp.vsell)), title=USDT CVD)",
          "name": "USDT CVD",
          "priceScaleId": "right",
          "id": "usdt-cvd",
          "options": {
            "priceScaleId": "usdt-cvd",
            "color": "rgb(8,153,129)",
            "priceLineVisible": false,
            "lastValueVisible": false,
            "lineType": 0,
            "lineStyle": 0
          },
          "series": [
            "usdt-cvd"
          ],
          "displayName": "USDT CVD",
          "preview": {},
          "unsavedChanges": true,
          "createdAt": 1681504601774,
          "updatedAt": 1681506369831
        },
        "busd-cvd": {
          "script": "line(cum(((BINANCE:ethbusd.vbuy + BINANCE_FUTURES:ethbusd.vbuy))-(BINANCE:ethbusd.vsell + BINANCE_FUTURES:ethbusd.vsell)), title=BUSD CVD)",
          "name": "BUSD CVD",
          "priceScaleId": "right",
          "id": "busd-cvd",
          "options": {
            "priceScaleId": "busd-cvd",
            "color": "rgb(255,235,59)"
          },
          "series": [
            "busd-cvd"
          ],
          "displayName": "BUSD CVD",
          "preview": {},
          "unsavedChanges": true,
          "createdAt": 1681504157689,
          "updatedAt": 1681504499150
        }
      },
      "priceScales": {
        "right": {
          "scaleMargins": {
            "top": 0.04,
            "bottom": 0.54
          },
          "priceFormat": {
            "precision": 2,
            "minMove": 0.01
          },
          "indicators": [
            "Price"
          ]
        },
        "volume_liquidations": {
          "scaleMargins": {
            "top": 0,
            "bottom": 0.93
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
        "test-code-busd-spot-delta": {
          "scaleMargins": {
            "top": 0.56,
            "bottom": 0.2
          },
          "indicators": [
            "BUSD Spot Delta"
          ]
        },
        "busd-perp-delta1": {
          "scaleMargins": {
            "top": 0.63,
            "bottom": 0.27
          },
          "indicators": [
            "BUSD Perp Delta"
          ]
        },
        "busd-spot-delta copy 1": {
          "scaleMargins": {
            "top": 0.48,
            "bottom": 0.4
          },
          "indicators": [
            "BUSD Spot Delta"
          ]
        },
        "usdt-spot-delta1": {
          "scaleMargins": {
            "top": 0.1,
            "bottom": 0.2
          }
        },
        "usdt-spot-delta2": {
          "scaleMargins": {
            "top": 0.76,
            "bottom": 0.15
          },
          "indicators": [
            "USDT Spot Delta"
          ]
        },
        "usdt-perp-delta1": {
          "scaleMargins": {
            "top": 0.89,
            "bottom": 0.02
          },
          "indicators": [
            "USDT Perp Delta"
          ]
        },
        "busd-spot-cvd": {
          "scaleMargins": {
            "top": 0.48,
            "bottom": 0.4
          },
          "indicators": [
            "BUSD Spot CVD"
          ]
        },
        "btcbusd-perp-delta": {
          "scaleMargins": {
            "top": 0.1,
            "bottom": 0.2
          }
        },
        "busd-perp-cvd": {
          "scaleMargins": {
            "top": 0.63,
            "bottom": 0.27
          },
          "indicators": [
            "BUSD Perp CVD"
          ]
        },
        "spot-usdt-cvd": {
          "scaleMargins": {
            "top": 0.76,
            "bottom": 0.15
          },
          "indicators": [
            "USDT Spot CVD"
          ]
        },
        "busd-spot-cvd-candle": {
          "scaleMargins": {
            "top": 0.89,
            "bottom": 0.02
          },
          "indicators": [
            "USDT Perp CVD "
          ]
        },
        "usdt-cvd": {
          "scaleMargins": {
            "top": 0.04,
            "bottom": 0.54
          },
          "indicators": [
            "USDT CVD"
          ]
        },
        "busd-cvd": {
          "scaleMargins": {
            "top": 0.04,
            "bottom": 0.54
          },
          "indicators": [
            "BUSD CVD"
          ]
        },
        "cvd": {
          "scaleMargins": {
            "top": 0.84,
            "bottom": 0
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
        "OKEX:ETH-USDT": true,
        "OKEX:ETH-USDT-SWAP": true,
        "OKEX:ETH-USDC-SWAP": true,
        "OKEX:ETH-USDC": true,
        "OKEX:ETH-USD-SWAP": true,
        "KUCOIN:ETHUSDTM": true,
        "KUCOIN:ETHUSDM": true,
        "KUCOIN:ETHUSDCM": true,
        "KUCOIN:ETH-USDT": true,
        "KUCOIN:ETH-USDC": true,
        "KRAKEN:PI_ETHUSD": true,
        "KRAKEN:ETH/USDT": true,
        "KRAKEN:ETH/USDC": true,
        "KRAKEN:ETH/USD": true,
        "DERIBIT:ETH-PERPETUAL": true,
        "DERIBIT:ETH_USDC-PERPETUAL": true,
        "COINBASE:ETH-USDT": true,
        "COINBASE:ETH-USD": true,
        "BYBIT:ETHUSDT-SPOT": true,
        "BYBIT:ETHUSDT": true,
        "BYBIT:ETHUSD": true,
        "BYBIT:ETHUSDC-SPOT": true,
        "BITSTAMP:ethusdt": true,
        "BITSTAMP:ethusd": true,
        "BITMEX:ETHUSDT": true,
        "BITMEX:ETH_USDT": true,
        "BITMEX:ETHUSD": true,
        "BITGET:ETHUSDT_UMCBL": true,
        "BITGET:ETHUSDT": true,
        "BITGET:ETHUSDC": true,
        "BITGET:ETHUSD_DMCBL": true,
        "BITGET:ETHPERP_CMCBL": true,
        "BITFINEX:ETHUST": true,
        "BITFINEX:ETHUSD": true,
        "BITFINEX:ETHF0:USTF0": true
      },
      "barSpacing": 6.857233474217456,
      "navigationState": {
        "tab": "script",
        "optionsQuery": "",
        "fontSizePx": 16
      },
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
        "timeframe-minutes",
        "indicator-right-format",
        "indicator-right-script",
        "indicator-right-scale",
        "indicator-right-colors",
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
      "previousSearchSelections": [
        {
          "label": "ETHUSD",
          "markets": [
            "BINANCE_FUTURES:ethbusd",
            "BINANCE_FUTURES:ethusd_perp",
            "BINANCE_FUTURES:ethusdt",
            "BINANCE:ethbusd",
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
            "OKEX:ETH-USD-SWAP",
            "OKEX:ETH-USDC",
            "OKEX:ETH-USDC-SWAP",
            "OKEX:ETH-USDT",
            "OKEX:ETH-USDT-SWAP"
          ],
          "count": 40
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
    }
  }
}

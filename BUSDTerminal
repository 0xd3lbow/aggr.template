{
  "version": 7,
  "createdAt": 1681243556363,
  "updatedAt": 1681521162169,
  "name": "BUSD/USDT Terminal",
  "id": "busd-usdt-terminal",
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
            "BINANCE:btcusdt"
          ],
          "zoom": 1.25
        },
        "trades": {
          "id": "trades",
          "name": "",
          "type": "trades",
          "markets": [
            "BINANCE_FUTURES:btcbusd",
            "BINANCE_FUTURES:btcusd_perp",
            "BINANCE_FUTURES:btcusdt",
            "BINANCE:btcbusd",
            "BINANCE:btcusdt",
            "BITFINEX:BTCF0:USTF0",
            "BITFINEX:BTCUSD",
            "BITFINEX:BTCUST",
            "BITGET:BTCUSDT",
            "BITGET:BTCUSDT_UMCBL",
            "BITMEX:XBTUSD",
            "BITMEX:XBTUSDT",
            "BITSTAMP:btcusd",
            "BITSTAMP:btcusdt",
            "BYBIT:BTCUSD",
            "BYBIT:BTCUSDT",
            "BYBIT:BTCUSDT-SPOT",
            "COINBASE:BTC-USD",
            "COINBASE:BTC-USDT",
            "DERIBIT:BTC-PERPETUAL",
            "KRAKEN:PI_XBTUSD",
            "KUCOIN:BTC-USDT",
            "OKEX:BTC-USD-SWAP",
            "OKEX:BTC-USDT-SWAP"
          ],
          "settings": {
            "showLiquidations": false
          },
          "zoom": 1.25
        },
        "prices": {
          "id": "prices",
          "name": "",
          "type": "prices",
          "markets": [
            "BINANCE_FUTURES:btcbusd",
            "BINANCE_FUTURES:btcusd_perp",
            "BINANCE_FUTURES:btcusdt",
            "BINANCE:btcbusd",
            "BINANCE:btcusdt"
          ]
        },
        "chart copy 1": {
          "id": "chart copy 1",
          "name": "",
          "type": "chart",
          "markets": [
            "BINANCE_FUTURES:btcbusd",
            "BINANCE_FUTURES:btcusd_perp",
            "BINANCE_FUTURES:btcusdt",
            "BINANCE:btcbusd",
            "BINANCE:btcusdt",
            "COINBASE:BTC-USD"
          ]
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
          "h": 18,
          "moved": false
        },
        {
          "i": "prices",
          "type": "prices",
          "y": 18,
          "x": 20,
          "w": 4,
          "h": 1,
          "moved": false
        },
        {
          "i": "chart copy 1",
          "type": "chart",
          "y": 19,
          "x": 20,
          "w": 4,
          "h": 5,
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
          "updatedAt": null,
          "series": [
            "liquidations",
            "iq4yjkv0"
          ],
          "unsavedChanges": false
        },
        "price": {
          "enabled": true,
          "name": "Price",
          "script": "plotcandlestick(options.useHeikinAshi ? avg_heikinashi(bar) : options.useGaps ? avg_ohlc_with_gaps(bar) : avg_ohlc(bar))",
          "options": {
            "priceScaleId": "right",
            "priceFormat": {
              "auto": true,
              "precision": 1,
              "minMove": 0.1
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
          "updatedAt": null,
          "series": [
            "price"
          ],
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
            "ntst0op7"
          ]
        },
        "usdt-perp-cvd": {
          "script": "line(cum(((BINANCE_FUTURES:btcusdt.vbuy+BINANCE_FUTURES:btcusd_perp.vbuy))-(BINANCE_FUTURES:btcusdt.vsell+BINANCE_FUTURES:btcusd_perp.vsell)), title=USDT Perp CVD)",
          "name": "USDT Perp CVD ",
          "priceScaleId": "right",
          "id": "usdt-perp-cvd",
          "options": {
            "priceScaleId": "busd-spot-cvd-candle",
            "length": 14,
            "useGaps": null,
            "useHeikinAshi": null,
            "visible": true
          },
          "series": [
            "usdt-perp-cvd"
          ],
          "displayName": "USDT Perp CVD ",
          "unsavedChanges": true
        },
        "usdt-spot-cvd": {
          "script": "line(cum((BINANCE:btcusdt.vbuy)-(BINANCE:btcusdt.vsell)), title=USDT Spot CVD)",
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
          "unsavedChanges": false
        },
        "busd-spot-cvd": {
          "script": "line(cum(((BINANCE:btcbusd.vbuy))-(BINANCE:btcbusd.vsell)), title=BUSD Spot CVD)",
          "name": "BUSD Spot CVD",
          "priceScaleId": "right",
          "id": "busd-spot-cvd",
          "options": {
            "priceScaleId": "busd-spot-cvd",
            "visible": true
          },
          "series": [
            "busd-spot-cvd"
          ],
          "displayName": "BUSD Spot CVD",
          "unsavedChanges": true
        },
        "busd-perp-cvd": {
          "script": "line(cum(((BINANCE_FUTURES:btcbusd.vbuy))-(BINANCE_FUTURES:btcbusd.vsell)), title=BUSD Perp CVD)",
          "name": "BUSD Perp CVD",
          "priceScaleId": "right",
          "id": "busd-perp-cvd",
          "options": {
            "priceScaleId": "busd-perp-cvd",
            "visible": true
          },
          "series": [
            "busd-perp-cvd"
          ],
          "displayName": "BUSD Perp CVD",
          "unsavedChanges": false
        },
        "emas": {
          "script": "plotline(ema($price.close, options.fastLength), color=options.fastColor)\nplotline(ema($price.close, options.mediumLength), color=options.mediumColor)\nplotline(ema($price.close, options.slowLength), color=options.slowColor)",
          "name": "EMA {fastLength} {mediumLength} {slowLength}",
          "displayName": "EMA 50 100 200",
          "options": {
            "priceScaleId": "right",
            "fastLength": 50,
            "mediumLength": 100,
            "slowLength": 200,
            "fastColor": "rgb(156,39,176)",
            "mediumColor": "rgb(41,98,255)",
            "slowColor": "rgb(242,54,69)",
            "visible": false
          },
          "id": "emas",
          "createdAt": 1677551117097,
          "updatedAt": 1623024000000,
          "series": [
            "emas",
            "aoyp3sxo",
            "dh2t082t"
          ],
          "unsavedChanges": false
        },
        "busd-cvd": {
          "script": "line(cum(((BINANCE:btcbusd.vbuy + BINANCE_FUTURES:btcbusd.vbuy))-(BINANCE:btcbusd.vsell + BINANCE_FUTURES:btcbusd.vsell)), title=BUSD CVD)",
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
          "unsavedChanges": true
        },
        "usdt-cvd": {
          "script": "line(cum((BINANCE:btcusdt.vbuy + BINANCE_FUTURES:btcusdt.vbuy + BINANCE_FUTURES:btcusd_perp.vbuy)-(BINANCE:btcusdt.vsell + BINANCE_FUTURES:btcusdt.vsell + BINANCE_FUTURES:btcusd_perp.vsell)), title=USDT CVD)",
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
          "unsavedChanges": true
        },
        "busd-spot-delta copy 1": {
          "script": "_vbuy = (BINANCE:btcbusd.vbuy)\r\n\r\n_vsell = (BINANCE:btcbusd.vsell)\r\n\r\nvolume = _vbuy+ _vsell\r\na = sma(Math.pow(volume, 2), options.length)\r\nb = Math.pow(sum(volume, options.length), 2) / Math.pow(options.length, 2)\r\nstdev = Math.sqrt(a - b)\r\nbasis = sma(volume, options.length)\r\ndev = 1 * stdev\r\ntreshold = basis + dev\r\n\r\ndelta = _vbuy - _vsell\r\npos_delta = delta > 0\r\nweighted_vol = volume > treshold\r\nohlc = avg_ohlc(bar)\r\nclose_above = ohlc.close > ohlc.open\r\n\r\ncol = pos_delta ? (weighted_vol ? (close_above ? options.upColorHighVol : options.divColorSigUp) : (close_above ? options.upColorLowVol : options.divColorSmallUp)) : (weighted_vol ? (close_above ? options.divColorSigDown : options.downColorHighVol) : (close_above ? options.divColorSmallDown : options.downColorLowVol))\r\n\r\nplothistogram({ time: time, value: (delta), color: col, overlay: true }, title=\"BUSD Spot Delta\")",
          "name": "BUSD Spot Delta",
          "priceScaleId": "right",
          "id": "busd-spot-delta copy 1",
          "options": {
            "priceScaleId": "test-code-busd-spot-delta",
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
          "unsavedChanges": false
        },
        "busd-perp-delta1": {
          "script": "_vbuy = (BINANCE_FUTURES:btcbusd.vbuy)\r\n\r\n_vsell = (BINANCE_FUTURES:btcbusd.vsell)\r\n\r\nvolume = _vbuy+ _vsell\r\na = sma(Math.pow(volume, 2), options.length)\r\nb = Math.pow(sum(volume, options.length), 2) / Math.pow(options.length, 2)\r\nstdev = Math.sqrt(a - b)\r\nbasis = sma(volume, options.length)\r\ndev = 1 * stdev\r\ntreshold = basis + dev\r\n\r\ndelta = _vbuy - _vsell\r\npos_delta = delta > 0\r\nweighted_vol = volume > treshold\r\nohlc = avg_ohlc(bar)\r\nclose_above = ohlc.close > ohlc.open\r\n\r\ncol = pos_delta ? (weighted_vol ? (close_above ? options.upColorHighVol : options.divColorSigUp) : (close_above ? options.upColorLowVol : options.divColorSmallUp)) : (weighted_vol ? (close_above ? options.divColorSigDown : options.downColorHighVol) : (close_above ? options.divColorSmallDown : options.downColorLowVol))\r\n\r\nplothistogram({ time: time, value: (delta), color: col, overlay: true }, title=\"BUSD Perp Delta\")",
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
            "upColorLowVol": "rgb(255,235,59)",
            "visible": true
          },
          "series": [
            "busd-perp-delta1"
          ],
          "displayName": "BUSD Perp Delta",
          "unsavedChanges": false
        },
        "usdt-spot-delta2": {
          "script": "_vbuy = (BINANCE:btcusdt.vbuy)\r\n\r\n_vsell = (BINANCE:btcusdt.vsell)\r\n\r\nvolume = _vbuy+ _vsell\r\na = sma(Math.pow(volume, 2), options.length)\r\nb = Math.pow(sum(volume, options.length), 2) / Math.pow(options.length, 2)\r\nstdev = Math.sqrt(a - b)\r\nbasis = sma(volume, options.length)\r\ndev = 1 * stdev\r\ntreshold = basis + dev\r\n\r\ndelta = _vbuy - _vsell\r\npos_delta = delta > 0\r\nweighted_vol = volume > treshold\r\nohlc = avg_ohlc(bar)\r\nclose_above = ohlc.close > ohlc.open\r\n\r\ncol = pos_delta ? (weighted_vol ? (close_above ? options.upColorHighVol : options.divColorSigUp) : (close_above ? options.upColorLowVol : options.divColorSmallUp)) : (weighted_vol ? (close_above ? options.divColorSigDown : options.downColorHighVol) : (close_above ? options.divColorSmallDown : options.downColorLowVol))\r\n\r\nplothistogram({ time: time, value: (delta), color: col, overlay: true }, title=\"Binance USDT Spot Delta\")",
          "name": "USDT Spot Delta",
          "priceScaleId": "right",
          "id": "usdt-spot-delta2",
          "options": {
            "priceScaleId": "usdt-spot-delta2",
            "length": 14,
            "visible": true,
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
          "script": "_vbuy = (BINANCE_FUTURES:btcusdt.vbuy+BINANCE_FUTURES:btcusd_perp.vbuy)\r\n\r\n_vsell = (BINANCE_FUTURES:btcusdt.vsell+BINANCE_FUTURES:btcusd_perp.vsell)\r\n\r\nvolume = _vbuy+ _vsell\r\na = sma(Math.pow(volume, 2), options.length)\r\nb = Math.pow(sum(volume, options.length), 2) / Math.pow(options.length, 2)\r\nstdev = Math.sqrt(a - b)\r\nbasis = sma(volume, options.length)\r\ndev = 1 * stdev\r\ntreshold = basis + dev\r\n\r\ndelta = _vbuy - _vsell\r\npos_delta = delta > 0\r\nweighted_vol = volume > treshold\r\nohlc = avg_ohlc(bar)\r\nclose_above = ohlc.close > ohlc.open\r\n\r\ncol = pos_delta ? (weighted_vol ? (close_above ? options.upColorHighVol : options.divColorSigUp) : (close_above ? options.upColorLowVol : options.divColorSmallUp)) : (weighted_vol ? (close_above ? options.divColorSigDown : options.downColorHighVol) : (close_above ? options.divColorSmallDown : options.downColorLowVol))\r\n\r\nplothistogram({ time: time, value: (delta), color: col, overlay: true }, title=\"Binance USDT Perp Delta\")",
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
            "upColorLowVol": "rgb(8,153,129)",
            "visible": true
          },
          "series": [
            "usdt-perp-delta2"
          ],
          "displayName": "USDT Perp Delta",
          "unsavedChanges": true
        }
      },
      "priceScales": {
        "right": {
          "scaleMargins": {
            "top": 0.01,
            "bottom": 0.57
          },
          "indicators": [
            "Price"
          ],
          "mode": 0,
          "priceFormat": {
            "precision": 1,
            "minMove": 0.1
          }
        },
        "cvd": {
          "scaleMargins": {
            "top": 0.01,
            "bottom": 0.57
          },
          "indicators": [
            "CVD"
          ]
        },
        "volume_liquidations": {
          "scaleMargins": {
            "top": 0,
            "bottom": 0.92
          },
          "indicators": [
            "Liquidations"
          ]
        },
        "volume": {
          "scaleMargins": {
            "top": 0.84,
            "bottom": 0
          },
          "indicators": [
            "Volume"
          ]
        },
        "busd-spot-delta": {
          "scaleMargins": {
            "top": 0.42,
            "bottom": 0.44
          },
          "indicators": [
            "BUSD Spot Delta"
          ]
        },
        "usdt-spot-delta": {
          "scaleMargins": {
            "top": 0.85,
            "bottom": 0.02
          },
          "indicators": [
            "USDT Perp Delta"
          ]
        },
        "btcbusd-perp-delta": {
          "scaleMargins": {
            "top": 0.56,
            "bottom": 0.29
          },
          "indicators": [
            "BUSD Perp Delta"
          ]
        },
        "usdt-spot-delta1": {
          "scaleMargins": {
            "top": 0.71,
            "bottom": 0.17
          },
          "indicators": [
            "USDT Spot Delta"
          ]
        },
        "spot-usdt-cvd": {
          "scaleMargins": {
            "top": 0.71,
            "bottom": 0.17
          },
          "indicators": [
            "Spot USDT CVD"
          ]
        },
        "binance-usdt-spot-cvd": {
          "scaleMargins": {
            "top": 0.1,
            "bottom": 0.2
          }
        },
        "busd-spot-cvd-candle": {
          "scaleMargins": {
            "top": 0.85,
            "bottom": 0.02
          },
          "indicators": [
            "USDT Perp CVD "
          ]
        },
        "busd-perp-cvd": {
          "scaleMargins": {
            "top": 0.56,
            "bottom": 0.29
          },
          "indicators": [
            "BUSD Perp CVD"
          ]
        },
        "busd-spot-cvd": {
          "scaleMargins": {
            "top": 0.42,
            "bottom": 0.44
          },
          "indicators": [
            "BUSD Spot CVD"
          ]
        },
        "shm": {
          "scaleMargins": {
            "top": 0,
            "bottom": 0.58
          },
          "indicators": [
            "SHM"
          ]
        },
        "m-usd-delta": {
          "scaleMargins": {
            "top": 0.85,
            "bottom": 0.02
          },
          "indicators": [
            "!m USD delta"
          ]
        },
        "busd-cvd": {
          "scaleMargins": {
            "top": 0.01,
            "bottom": 0.57
          },
          "indicators": [
            "BUSD CVD"
          ]
        },
        "usdt-cvd": {
          "scaleMargins": {
            "top": 0.01,
            "bottom": 0.57
          },
          "indicators": [
            "USDT CVD"
          ]
        },
        "ctd": {
          "scaleMargins": {
            "top": 0.1,
            "bottom": 0.2
          }
        },
        "test-code-busd-spot-delta": {
          "scaleMargins": {
            "top": 0.42,
            "bottom": 0.44
          },
          "indicators": [
            "BUSD Spot Delta"
          ]
        },
        "busd-perp-delta1": {
          "scaleMargins": {
            "top": 0.56,
            "bottom": 0.29
          },
          "indicators": [
            "BUSD Perp Delta"
          ]
        },
        "usdt-spot-delta2": {
          "scaleMargins": {
            "top": 0.71,
            "bottom": 0.17
          },
          "indicators": [
            "USDT Spot Delta"
          ]
        },
        "usdt-perp-delta1": {
          "scaleMargins": {
            "top": 0.85,
            "bottom": 0.02
          },
          "indicators": [
            "USDT Perp Delta"
          ]
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
      "hiddenMarkets": {},
      "barSpacing": 6.162691612401672,
      "navigationState": {
        "tab": "script",
        "optionsQuery": "",
        "fontSizePx": 20
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
      "buyColor": "rgb(76,175,80)",
      "sellColor": "rgb(239, 67, 82)",
      "timezoneOffset": 0,
      "useAudio": true,
      "audioVolume": 0.98,
      "audioFilters": {
        "PingPongDelay": true,
        "Compressor": false,
        "Delay": false,
        "HighPassFilter": true,
        "LowPassFilter": false
      },
      "sections": [
        "timeframe-minutes",
        "search-type",
        "search-exchanges",
        "search-quotes",
        "indicator-left-script",
        "indicator-left-other",
        "timeframe-hours",
        "settings-workspaces",
        "indicator-right-script",
        "indicator-right-default",
        "indicator-right-scale",
        "trades-display",
        "indicator-right-colors"
      ],
      "searchTypes": {
        "recentSearches": true,
        "historical": true,
        "spots": true,
        "perpetuals": false,
        "futures": false,
        "normalize": false,
        "mergeUsdt": true
      },
      "searchQuotes": {
        "BUSD": false,
        "BTC": false,
        "BNB": false,
        "USD": false,
        "USDT": false,
        "USDC": false,
        "OTHERS": false
      },
      "previousSearchSelections": [
        {
          "label": "BTCUSD",
          "markets": [
            "BINANCE_FUTURES:btcbusd",
            "BINANCE_FUTURES:btcusd_perp",
            "BINANCE_FUTURES:btcusdt",
            "BINANCE:btcbusd",
            "BINANCE:btcusdt",
            "COINBASE:BTC-USD"
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
            "BINANCE:btcusdt"
          ],
          "count": 5
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
            "BITGET:BTCUSDT",
            "BITGET:BTCUSDT_UMCBL",
            "BITMEX:XBTUSD",
            "BITMEX:XBTUSDT",
            "BITSTAMP:btcusd",
            "BITSTAMP:btcusdt",
            "BYBIT:BTCUSD",
            "BYBIT:BTCUSDT",
            "BYBIT:BTCUSDT-SPOT",
            "COINBASE:BTC-USD",
            "COINBASE:BTC-USDT",
            "DERIBIT:BTC-PERPETUAL",
            "KRAKEN:PI_XBTUSD",
            "KUCOIN:BTC-USDT",
            "OKEX:BTC-USD-SWAP",
            "OKEX:BTC-USDT-SWAP"
          ],
          "count": 24
        },
        {
          "label": "BTCUSD",
          "markets": [
            "BINANCE_FUTURES:btcbusd",
            "BINANCE_FUTURES:btcusd_perp",
            "BINANCE_FUTURES:btcusdt",
            "BINANCE:btcbusd"
          ],
          "count": 4
        },
        {
          "label": "BTCUSD",
          "markets": [
            "BINANCE_FUTURES:btcusd_perp",
            "BINANCE_FUTURES:btcusdt",
            "BINANCE:btcbusd"
          ],
          "count": 3
        },
        {
          "label": "BINANCE:btcbusd",
          "markets": [
            "BINANCE:btcbusd"
          ],
          "count": 0
        }
      ],
      "searchExchanges": {
        "UNISWAP": false,
        "BITFINEX": false,
        "BITGET": false,
        "BITMEX": false,
        "BITSTAMP": false,
        "BYBIT": false,
        "COINBASE": false,
        "DERIBIT": false,
        "DYDX": false,
        "KRAKEN": false,
        "KUCOIN": false,
        "MEXC": false,
        "OKEX": false,
        "BINANCE": false,
        "BINANCE_FUTURES": true
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
    "prices": {
      "animateSort": true,
      "showPairs": true,
      "showVolume": true,
      "showVolumeDelta": false,
      "period": 0,
      "showChange": false,
      "showPrice": false,
      "sortType": "delta",
      "sortOrder": -1,
      "_id": "prices"
    },
    "chart copy 1": {
      "indicatorsErrors": {},
      "indicators": {
        "usdt-perp-prem": {
          "script": "perpAvg = (BINANCE_FUTURES:btcusdt.close)\n\nspotAvg = (BINANCE:btcusdt.close)\n\npremium = (perpAvg/spotAvg - 1)*100\nbaseline = 0\n\nplotcloudarea(premium, baseline, title=USDT Perp Prem)",
          "name": "USDT Perp Prem",
          "priceScaleId": "right",
          "id": "usdt-perp-prem",
          "options": {
            "priceScaleId": "premium",
            "visible": true,
            "positiveColor": "rgba(8,153,129,0.28)",
            "higherLineColor": "rgba(150,25,35,0)",
            "lowerLineColor": "rgba(2,115,96,0)",
            "lastValueVisible": true,
            "negativeColor": "rgba(242,54,69,0.1)"
          },
          "series": [
            "usdt-perp-prem"
          ],
          "displayName": "USDT Perp Prem",
          "unsavedChanges": false
        },
        "usd-perp-prem": {
          "script": "perpAvg = (BINANCE_FUTURES:btcusd_perp.close)\n\nspotAvg = (BINANCE:btcusdt.close)\n\npremium = (perpAvg/spotAvg - 1)*100\nbaseline = 0\n\nplotcloudarea(premium, baseline, title=USD Perp Prem)",
          "name": "USD Perp Prem",
          "priceScaleId": "right",
          "id": "usd-perp-prem",
          "options": {
            "priceScaleId": "right",
            "positiveColor": "rgba(8,153,129,0.36)",
            "lowerLineColor": "rgba(93,96,107,0)",
            "higherLineColor": "rgba(76,175,80,0)",
            "priceLineVisible": false,
            "lastValueVisible": true
          },
          "series": [
            "usd-perp-prem"
          ],
          "displayName": "USD Perp Prem",
          "unsavedChanges": true
        },
        "busd-perp-prem": {
          "script": "perpAvg = (BINANCE_FUTURES:btcbusd.close)\n\nspotAvg = (BINANCE:btcbusd.close)\n\npremium = (perpAvg/spotAvg - 1)*100\nbaseline = 0\n\nplotcloudarea(premium, baseline, title=BUSD Perp Prem)",
          "name": "BUSD Perp Prem",
          "priceScaleId": "right",
          "id": "busd-perp-prem",
          "options": {
            "priceScaleId": "busd-prem",
            "positiveColor": "rgba(240,220,51,0.51)",
            "lowerLineColor": "rgba(255,82,82,0.06)",
            "higherLineColor": "rgba(76,175,80,0.16)",
            "lastValueVisible": true,
            "negativeColor": "rgba(242,54,69,0.27)"
          },
          "series": [
            "busd-perp-prem"
          ],
          "displayName": "BUSD Perp Prem",
          "unsavedChanges": false
        }
      },
      "priceScales": {
        "right": {
          "scaleMargins": {
            "top": 0.4,
            "bottom": 0.38
          },
          "indicators": [
            "USD Perp Prem"
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
            "top": 0.75,
            "bottom": 0.17
          }
        },
        "volume": {
          "scaleMargins": {
            "top": 0.84,
            "bottom": 0
          }
        },
        "premium": {
          "scaleMargins": {
            "top": 0.69,
            "bottom": 0.12
          },
          "indicators": [
            "USDT Perp Prem"
          ]
        },
        "test2": {
          "scaleMargins": {
            "top": 0.31,
            "bottom": 0.5
          },
          "indicators": [
            "test2"
          ]
        },
        "busd-prem": {
          "scaleMargins": {
            "top": 0.12,
            "bottom": 0.67
          },
          "indicators": [
            "BUSD Perp Prem"
          ]
        }
      },
      "layouting": false,
      "showIndicators": true,
      "timeframe": "60",
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
        "COINBASE:BTC-USD": true
      },
      "barSpacing": 1.0417603556331543,
      "navigationState": {
        "tab": "script",
        "optionsQuery": "",
        "fontSizePx": 14
      },
      "_id": "chart copy 1"
    }
  }
}

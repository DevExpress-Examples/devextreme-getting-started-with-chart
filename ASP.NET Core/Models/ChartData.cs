using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ASP_NET_Core.Models;
static class ChartData {
    public static List<ChartDataPoint> ChartDataPoints = [
        new ChartDataPoint { Month = "January", TargetSpend = 12000, ActualSpend = 9500 },
        new ChartDataPoint { Month = "February", TargetSpend = 15500, ActualSpend = 16500 },
        new ChartDataPoint { Month = "March", TargetSpend = 13500, ActualSpend = 12000 },
        new ChartDataPoint { Month = "April", TargetSpend = 16000, ActualSpend = 14000 },
        new ChartDataPoint { Month = "May", TargetSpend = 17000, ActualSpend = 18500 },
        new ChartDataPoint { Month = "June", TargetSpend = 20000, ActualSpend = 17500 },
        new ChartDataPoint { Month = "July", TargetSpend = 14500, ActualSpend = 11000 },
        new ChartDataPoint { Month = "August", TargetSpend = 21000, ActualSpend = 22500 },
        new ChartDataPoint { Month = "September", TargetSpend = 19000, ActualSpend = 18000 },
        new ChartDataPoint { Month = "October", TargetSpend = 22000, ActualSpend = 25000 },
        new ChartDataPoint { Month = "November", TargetSpend = 16000, ActualSpend = 14500 },
        new ChartDataPoint { Month = "December", TargetSpend = 25000, ActualSpend = 27000 },
    ];

    public static double AverageSpend => ChartDataPoints.Average(p => p.ActualSpend);
}

package main

import "fmt"

func calculateSwimTime(distance float64, speed float64) float64 {
	return distance / speed
}

func main() {
	time := calculateSwimTime(100, 5)
	fmt.Printf("Estimated swim time: %.2f hours\n", time)
}

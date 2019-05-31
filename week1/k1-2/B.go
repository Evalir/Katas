package main

import (
	"bufio"
	"strings"
	"os"
	"fmt"
	"strconv"
)

func main() {
	r := bufio.NewReader(os.Stdin)
	size, _ := r.ReadString('\n')
	data := strings.Split(size, " ")
	data[1] = strings.TrimSuffix(data[1], "\n")
	n, _ := strconv.Atoi(data[0])
	m, _ := strconv.Atoi(data[1])
	arr := make([]string, n + 3)
	// read stuff
	for i := 1; i <= n; i++ {
		arr[i], _ = r.ReadString('\n')
		arr[i] = "?" + arr[i] + "?"
		arr[i] = strings.TrimSuffix(arr[i], "\n")
	}
	// actually solve the problem
	for i := 1; i <= n; i++ {
		for j := 1; j <= m; j++ {
			cnt := 0
			if arr[i][j] == '.' {
				if arr[i - 1][j] == '*' {
					cnt++;
				}
				if arr[i + 1][j] == '*' {
					cnt++
				}
				if arr[i][j - 1] == '*' {
					cnt++
				}
				if arr[i][j + 1] == '*' {
					cnt++
				}
				if arr[i - 1][j - 1] == '*' {
					cnt++
				}
				if arr[i - 1][j + 1] == '*' {
					cnt++
				}
				if arr[i + 1][j - 1] == '*' {
					cnt++
				}
				if arr[i + 1][j + 1] == '*' {
					cnt++
				}
				if cnt == 3 {
					arr[i][j] = '*';
				}
			} else {
				fmt.Println("*")
			}
		}
	}
}
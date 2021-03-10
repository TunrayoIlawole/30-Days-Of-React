class Statistics {
    constructor (sample) {
        this.sample = sample;
    }

    mean() {
        const sum = this.sample.reduce((a, b) => a + b, 0);
        const mean = sum / this.sample.length;

        return mean;
    }

    median() {
        const mid = Math.floor(this.sample.length / 2),
        nums = [...this.sample].sort((a, b) => a - b);

        return this.sample.length % 2 !== 0 ? this.sample[mid] : (nums[mid - 1] + nums[mid]) / 2;
    }

    mode() {
        let modes = [], count = [], i, number, maxIndex = 0;

        for (i = 0; i < this.sample.length; i++) {
            number = this.sample[i];
            count[number] = (count[number] || 0) + 1;

            if (count[number] > maxIndex) {
                maxIndex = count[number];
            }
        }

        for (i in count) {
            if (count.hasOwnProperty(i)) {
                if (count[i] === maxIndex) {
                    modes.push(Number(i));
                }
            }
        }

        return modes;
    }

    range() {
        this.sample.sort();
        return [this.sample[0], this.sample[this.sample.length - 1]];
    }

    variance() {
        const mean = this.mean(this.sample);
        return this.mean(this.sample.map(function(num) {
            return Math.pow(num - mean, 2);
        }))
    }

    standardDeviation() {
        return Math.sqrt(this.variance(this.sample));
    }

    min() {
        return Math.min.apply(null, this.sample);
    }

    max() {
        return Math.max.apply(null, this.sample);
    }

    count() {
        return this.sample.length;
    }
}

const sample1 = new Statistics([1, 2, 3, 4, 5, 6, 5]);

console.log(sample1.mean());
console.log(sample1.median());
console.log(sample1.mode());
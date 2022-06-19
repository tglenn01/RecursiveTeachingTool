package backend;

import backend.dynamicAnalysis.DynamicAnalysis;
import backend.dynamicAnalysis.MyMethod;

import java.util.HashMap;
import java.util.Map;

public class RecursiveExample {

    // Example recursive method
    private static void recurse(int currentValue, int targetValue) {
        if (currentValue >= targetValue) {
            System.out.println("Matched or above!!");
            return;
        }

        recurse(currentValue + 1, targetValue);
        recurse(currentValue + 2, targetValue);
    }

    // This is just copied code to show what the difference would be
    // TODO delete this and move the analysis code to the actual method
    private static void recurseAnalysis(int currentValue, int targetValue, MyMethod parentCall) {
        Map<String, Object> parameterMap = new HashMap<>();
        parameterMap.put("currentValue", currentValue);
        parameterMap.put("targetValue", targetValue);
        int myId = DynamicAnalysis.getNextId();
        MyMethod myMethod = new MyMethod(myId, "recurse", parameterMap, parentCall);
        DynamicAnalysis.analyze(myMethod);
        if (currentValue >= targetValue) {
            System.out.println("Matched or above!!");
            return;
        }

        recurseAnalysis(currentValue + 1, targetValue, myMethod);
        recurseAnalysis(currentValue + 2, targetValue, myMethod);
    }

}

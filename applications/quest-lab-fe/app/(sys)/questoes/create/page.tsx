"use client";

import type React from "react";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";

export default function CreateQuestionPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [questionType, setQuestionType] = useState("multiple-choice");
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    difficulty: "",
    question: "",
    options: ["", "", "", ""],
    correctOption: "0",
    correctAnswer: "",
  });
  const router = useRouter();
  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleOptionChange = (index: number, value: string) => {
    const newOptions = [...formData.options];
    newOptions[index] = value;
    setFormData((prev) => ({ ...prev, options: newOptions }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast({
        title: "Question created successfully!",
        description: "The question has been added to the question bank.",
      });

      router.push("/questoes");
    } catch (error) {
      toast({
        title: "Error creating question",
        description: "An error occurred while trying to create the question.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="app-main">
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">
          Create New Question
        </h1>
        <p className="text-muted-foreground">
          Fill in the fields below to create a new question.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <Card>
          <CardHeader>
            <CardTitle>Basic Information</CardTitle>
            <CardDescription>
              Set the title, category, and difficulty of the question.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Question Title</Label>
              <Input
                id="title"
                name="title"
                placeholder="Ex: Quadratic equation"
                required
                value={formData.title}
                onChange={handleChange}
              />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select
                  value={formData.category}
                  onValueChange={(value) =>
                    setFormData((prev) => ({ ...prev, category: value }))
                  }
                >
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Matemática">Mathematics</SelectItem>
                    <SelectItem value="Português">Portuguese</SelectItem>
                    <SelectItem value="Ciências">Science</SelectItem>
                    <SelectItem value="História">History</SelectItem>
                    <SelectItem value="Geografia">Geography</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="difficulty">Difficulty</Label>
                <Select
                  value={formData.difficulty}
                  onValueChange={(value) =>
                    setFormData((prev) => ({ ...prev, difficulty: value }))
                  }
                >
                  <SelectTrigger id="difficulty">
                    <SelectValue placeholder="Select difficulty" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Fácil">Easy</SelectItem>
                    <SelectItem value="Médio">Medium</SelectItem>
                    <SelectItem value="Difícil">Hard</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Question Content</CardTitle>
            <CardDescription>
              Define the question statement and answer options.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="question">Statement</Label>
              <Textarea
                id="question"
                name="question"
                placeholder="Enter the question statement..."
                required
                className="min-h-[100px]"
                value={formData.question}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <Label>Question Type</Label>
              <RadioGroup
                defaultValue={questionType}
                onValueChange={setQuestionType}
                className="flex flex-col space-y-1"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="multiple-choice"
                    id="multiple-choice"
                  />
                  <Label htmlFor="multiple-choice" className="font-normal">
                    Multiple Choice
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="essay" id="essay" />
                  <Label htmlFor="essay" className="font-normal">
                    Essay
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {questionType === "multiple-choice" ? (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Alternatives</Label>
                  {formData.options.map((option, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <RadioGroup
                        value={formData.correctOption}
                        onValueChange={(value) =>
                          setFormData((prev) => ({
                            ...prev,
                            correctOption: value,
                          }))
                        }
                        className="flex items-center"
                      >
                        <RadioGroupItem
                          value={index.toString()}
                          id={`option-${index}`}
                        />
                      </RadioGroup>
                      <Input
                        placeholder={`Alternative ${index + 1}`}
                        value={option}
                        onChange={(e) =>
                          handleOptionChange(index, e.target.value)
                        }
                        className="flex-1"
                      />
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  Select the button next to the correct alternative.
                </p>
              </div>
            ) : (
              <div className="space-y-2">
                <Label htmlFor="correctAnswer">Correct Answer</Label>
                <Textarea
                  id="correctAnswer"
                  name="correctAnswer"
                  placeholder="Enter the correct answer for this question..."
                  className="min-h-[100px]"
                  value={formData.correctAnswer}
                  onChange={handleChange}
                />
              </div>
            )}
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button
              type="button"
              variant="outline"
              onClick={() => router.push("/questoes")}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Saving..." : "Save Question"}
            </Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
}

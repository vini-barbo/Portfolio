"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Award,
  Calendar,
  CheckCircle,
  Clock,
  Copy,
  Edit,
  FileText,
  Filter,
  MoreHorizontal,
  Play,
  Plus,
  Search,
  Timer,
  Trash2,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

const mockPendingExams = [
  {
    id: 1,
    title: "Simulado Nacional de Matemática",
    subject: "Mathematics",
    dueDate: "2024-06-15",
    duration: 120,
    questionsCount: 30,
    difficulty: "Medium",
    status: "pending",
  },
  {
    id: 2,
    title: "Avaliação Trimestral de Português",
    subject: "Portuguese",
    dueDate: "2024-06-10",
    duration: 90,
    questionsCount: 25,
    difficulty: "Hard",
    status: "pending",
  },
  {
    id: 3,
    title: "Simulado de Ciências Naturais",
    subject: "Science",
    dueDate: "2024-06-20",
    duration: 60,
    questionsCount: 20,
    difficulty: "Easy",
    status: "pending",
  },
];

const mockCompletedExams = [
  {
    id: 4,
    title: "Avaliação Bimestral de História",
    subject: "History",
    completedDate: "2024-05-20",
    duration: 90,
    questionsCount: 25,
    correctAnswers: 18,
    score: 72,
    status: "completed",
  },
  {
    id: 5,
    title: "Simulado de Geografia",
    subject: "Geography",
    completedDate: "2024-05-15",
    duration: 60,
    questionsCount: 20,
    correctAnswers: 16,
    score: 80,
    status: "completed",
  },
  {
    id: 6,
    title: "Avaliação de Física",
    subject: "Physics",
    completedDate: "2024-05-10",
    duration: 75,
    questionsCount: 15,
    correctAnswers: 10,
    score: 67,
    status: "completed",
  },
  {
    id: 7,
    title: "Simulado de Química",
    subject: "Chemistry",
    completedDate: "2024-05-05",
    duration: 60,
    questionsCount: 20,
    correctAnswers: 14,
    score: 70,
    status: "completed",
  },
];

const mockTeacherExams = [
  {
    id: 1,
    title: "Simulado Nacional de Matemática",
    subject: "Mathematics",
    createdDate: "2024-05-01",
    dueDate: "2024-06-15",
    duration: 120,
    questionsCount: 30,
    difficulty: "Medium",
    classes: [
      { id: 1, name: "3º Ano A", studentsCount: 28, completedCount: 20 },
      { id: 2, name: "3º Ano B", studentsCount: 25, completedCount: 18 },
    ],
    averageScore: 76,
  },
  {
    id: 2,
    title: "Avaliação Trimestral de Português",
    subject: "Portuguese",
    createdDate: "2024-05-05",
    dueDate: "2024-06-10",
    duration: 90,
    questionsCount: 25,
    difficulty: "Hard",
    classes: [
      { id: 3, name: "2º Ano A", studentsCount: 30, completedCount: 25 },
      { id: 4, name: "2º Ano B", studentsCount: 28, completedCount: 22 },
    ],
    averageScore: 68,
  },
  {
    id: 3,
    title: "Simulado de Ciências Naturais",
    subject: "Science",
    createdDate: "2024-05-10",
    dueDate: "2024-06-20",
    duration: 60,
    questionsCount: 20,
    difficulty: "Easy",
    classes: [
      { id: 6, name: "1º Ano A", studentsCount: 32, completedCount: 28 },
      { id: 7, name: "1º Ano B", studentsCount: 30, completedCount: 25 },
    ],
    averageScore: 82,
  },
  {
    id: 4,
    title: "Avaliação Bimestral de História",
    subject: "History",
    createdDate: "2024-04-15",
    dueDate: "2024-05-20",
    duration: 90,
    questionsCount: 25,
    difficulty: "Medium",
    classes: [
      { id: 8, name: "3º Ano A", studentsCount: 28, completedCount: 28 },
      { id: 9, name: "3º Ano B", studentsCount: 25, completedCount: 25 },
    ],
    averageScore: 74,
    completed: true,
  },
  {
    id: 5,
    title: "Simulado de Geografia",
    subject: "Geography",
    createdDate: "2024-04-10",
    dueDate: "2024-05-15",
    duration: 60,
    questionsCount: 20,
    difficulty: "Medium",
    classes: [
      { id: 10, name: "2º Ano A", studentsCount: 30, completedCount: 30 },
      { id: 11, name: "2º Ano B", studentsCount: 28, completedCount: 28 },
    ],
    averageScore: 79,
    completed: true,
  },
];

const subjects = [
  "All",
  "Mathematics",
  "Portuguese",
  "Science",
  "History",
  "Geography",
  "Physics",
  "Chemistry",
  "Biology",
  "English",
];

export default function ExamsPage() {
  const [userRole, setUserRole] = useState<string | null>(null);
  const [pendingExams, setPendingExams] = useState(mockPendingExams);
  const [completedExams, setCompletedExams] = useState(mockCompletedExams);
  const [teacherExams, setTeacherExams] = useState(mockTeacherExams);
  const [filteredPendingExams, setFilteredPendingExams] =
    useState(mockPendingExams);
  const [filteredCompletedExams, setFilteredCompletedExams] =
    useState(mockCompletedExams);
  const [filteredTeacherExams, setFilteredTeacherExams] =
    useState(mockTeacherExams);
  const [searchQuery, setSearchQuery] = useState("");
  const [subjectFilter, setSubjectFilter] = useState("Todas");
  const [statusFilter, setStatusFilter] = useState("all");
  const [showStartExamDialog, setShowStartExamDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [selectedExam, setSelectedExam] = useState<any>(null);
  const [selectedExamToDelete, setSelectedExamToDelete] = useState<any>(null);
  const { toast } = useToast();

  useEffect(() => {
    const role = localStorage.getItem("userRole");
    setUserRole(role);
  }, []);

  useEffect(() => {
    if (userRole === "aluno") {
      let filteredPending = [...pendingExams];
      let filteredCompleted = [...completedExams];

      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        filteredPending = filteredPending.filter(
          (exam) =>
            exam.title.toLowerCase().includes(query) ||
            exam.subject.toLowerCase().includes(query)
        );
        filteredCompleted = filteredCompleted.filter(
          (exam) =>
            exam.title.toLowerCase().includes(query) ||
            exam.subject.toLowerCase().includes(query)
        );
      }

      if (subjectFilter !== "All") {
        filteredPending = filteredPending.filter(
          (exam) => exam.subject === subjectFilter
        );
        filteredCompleted = filteredCompleted.filter(
          (exam) => exam.subject === subjectFilter
        );
      }

      setFilteredPendingExams(filteredPending);
      setFilteredCompletedExams(filteredCompleted);
    }
  }, [pendingExams, completedExams, searchQuery, subjectFilter, userRole]);

  useEffect(() => {
    if (userRole === "professor") {
      let filtered = [...teacherExams];

      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        filtered = filtered.filter(
          (exam) =>
            exam.title.toLowerCase().includes(query) ||
            exam.subject.toLowerCase().includes(query)
        );
      }

      if (subjectFilter !== "All") {
        filtered = filtered.filter((exam) => exam.subject === subjectFilter);
      }

      if (statusFilter === "active") {
        filtered = filtered.filter((exam) => !exam.completed);
      } else if (statusFilter === "completed") {
        filtered = filtered.filter((exam) => exam.completed);
      }

      setFilteredTeacherExams(filtered);
    }
  }, [teacherExams, searchQuery, subjectFilter, statusFilter, userRole]);

  const handleStartExam = (exam: any) => {
    setSelectedExam(exam);
    setShowStartExamDialog(true);
  };

  const router = useRouter();
  const confirmStartExam = () => {
    setShowStartExamDialog(false);

    toast({
      title: "Exam started",
      description: `You started the exam: ${selectedExam?.title}`,
    });
    router.push(`/prova/1`);
  };

  const handleDeleteExam = (exam: any) => {
    setSelectedExamToDelete(exam);
    setShowDeleteDialog(true);
  };

  const confirmDeleteExam = () => {
    setShowDeleteDialog(false);

    setTeacherExams(
      teacherExams.filter((exam) => exam.id !== selectedExamToDelete.id)
    );

    toast({
      title: "Exam deleted",
      description: `The exam "${selectedExamToDelete?.title}" was successfully deleted.`,
    });
  };

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    };
    return new Date(dateString).toLocaleDateString("pt-BR", options);
  };

  const formatDuration = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;

    if (hours > 0) {
      return `${hours}h ${mins > 0 ? `${mins}min` : ""}`;
    }

    return `${mins} minutos`;
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "border-green-500 text-green-500";
      case "Medium":
        return "border-yellow-500 text-yellow-500";
      case "Hard":
        return "border-red-500 text-red-500";
      default:
        return "";
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-500";
    if (score >= 60) return "text-yellow-500";
    return "text-red-500";
  };

  const renderStudentView = () => (
    <>
      <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Exams and Tests
          </h1>
          <p className="text-muted-foreground">
            Manage your pending assessments and view your exam history.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4 md:flex-row">
        <div className="flex-1">
          <Input
            placeholder="Search exams..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full"
            prefix={<Search className="mr-2 h-4 w-4 text-muted-foreground" />}
          />
        </div>
        <Select value={subjectFilter} onValueChange={setSubjectFilter}>
          <SelectTrigger className="w-full md:w-[200px]">
            <Filter className="mr-2 h-4 w-4" />
            <SelectValue placeholder="Subject" />
          </SelectTrigger>
          <SelectContent>
            {subjects.map((subject) => (
              <SelectItem key={subject} value={subject}>
                {subject}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Tabs defaultValue="pending" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="pending" className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            Pending
          </TabsTrigger>
          <TabsTrigger value="completed" className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4" />
            Completed
          </TabsTrigger>
        </TabsList>

        <TabsContent value="pending">
          {filteredPendingExams.length > 0 ? (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {filteredPendingExams.map((exam) => (
                <Card key={exam.id} className="overflow-hidden">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between">
                      <Badge
                        variant="outline"
                        className="bg-primary/10 text-primary"
                      >
                        {exam.subject}
                      </Badge>
                      <Badge
                        variant="outline"
                        className={getDifficultyColor(exam.difficulty)}
                      >
                        {exam.difficulty}
                      </Badge>
                    </div>
                    <CardTitle className="mt-2">{exam.title}</CardTitle>
                    <CardDescription>
                      <div className="flex items-center gap-1 mt-1">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span>Due date: {formatDate(exam.dueDate)}</span>
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col items-center justify-center rounded-md border p-3">
                        <Clock className="mb-1 h-5 w-5 text-muted-foreground" />
                        <span className="text-sm font-medium">
                          {formatDuration(exam.duration)}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          Duration
                        </span>
                      </div>
                      <div className="flex flex-col items-center justify-center rounded-md border p-3">
                        <FileText className="mb-1 h-5 w-5 text-muted-foreground" />
                        <span className="text-sm font-medium">
                          {exam.questionsCount}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          Questions
                        </span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      className="w-full flex items-center gap-2"
                      onClick={() => handleStartExam(exam)}
                    >
                      <Play className="h-4 w-4" />
                      Start Exam
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="flex h-[200px] w-full flex-col items-center justify-center rounded-md border border-dashed">
              <Calendar className="h-10 w-10 text-muted-foreground mb-2" />
              <p className="text-sm text-muted-foreground">
                No pending exams found.
              </p>
            </div>
          )}
        </TabsContent>

        <TabsContent value="completed">
          {filteredCompletedExams.length > 0 ? (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {filteredCompletedExams.map((exam) => (
                <Card key={exam.id} className="overflow-hidden">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between">
                      <Badge
                        variant="outline"
                        className="bg-primary/10 text-primary"
                      >
                        {exam.subject}
                      </Badge>
                      <Badge
                        variant="outline"
                        className="border-blue-500 text-blue-500"
                      >
                        Completed
                      </Badge>
                    </div>
                    <CardTitle className="mt-2">{exam.title}</CardTitle>
                    <CardDescription>
                      <div className="flex items-center gap-1 mt-1">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span>
                          Completed on: {formatDate(exam.completedDate)}
                        </span>
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col items-center justify-center rounded-md border p-3">
                        <Award className="mb-1 h-5 w-5 text-muted-foreground" />
                        <span
                          className={`text-sm font-medium ${getScoreColor(
                            exam.score
                          )}`}
                        >
                          {exam.score}%
                        </span>
                        <span className="text-xs text-muted-foreground">
                          Score
                        </span>
                      </div>
                      <div className="flex flex-col items-center justify-center rounded-md border p-3">
                        <FileText className="mb-1 h-5 w-5 text-muted-foreground" />
                        <span className="text-sm font-medium">
                          {exam.correctAnswers}/{exam.questionsCount}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          Correct
                        </span>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm">Performance</span>
                        <span
                          className={`text-sm font-medium ${getScoreColor(
                            exam.score
                          )}`}
                        >
                          {exam.score}%
                        </span>
                      </div>
                      <Progress value={exam.score} className="h-2" />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => {
                        toast({
                          title: "Exam review",
                          description: `You are reviewing the exam: ${exam.title}`,
                        });
                      }}
                    >
                      View Details
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="flex h-[200px] w-full flex-col items-center justify-center rounded-md border border-dashed">
              <CheckCircle className="h-10 w-10 text-muted-foreground mb-2" />
              <p className="text-sm text-muted-foreground">
                No completed exams found.
              </p>
            </div>
          )}
        </TabsContent>
      </Tabs>

      <Dialog open={showStartExamDialog} onOpenChange={setShowStartExamDialog}>
        <DialogContent className="!bg-white">
          <DialogHeader>
            <DialogTitle>Start Exam</DialogTitle>
            <DialogDescription>
              You are about to start the exam. Make sure you have enough time to complete it.
            </DialogDescription>
          </DialogHeader>

          {selectedExam && (
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <h3 className="font-medium">{selectedExam.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {selectedExam.subject}
                </p>
              </div>

              <Separator />

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium">Duration</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Timer className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">
                      {formatDuration(selectedExam.duration)}
                    </span>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium">Questions</p>
                  <div className="flex items-center gap-2 mt-1">
                    <FileText className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">
                      {selectedExam.questionsCount} questions
                    </span>
                  </div>
                </div>
              </div>

              <div className="rounded-md bg-yellow-50 p-3 text-sm text-yellow-800 dark:bg-yellow-950/50 dark:text-yellow-400">
                <div className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 mt-0.5"
                  >
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                    <line x1="12" y1="9" x2="12" y2="13" />
                    <line x1="12" y1="17" x2="12.01" y2="17" />
                  </svg>
                  <div>
                    <p className="font-medium">Warning</p>
                    <p className="mt-1">
                      Once started, the exam cannot be paused. Make sure you have{" "}
                      {formatDuration(selectedExam.duration)} available to complete it.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setShowStartExamDialog(false)}
            >
              Cancel
            </Button>
            <Button onClick={confirmStartExam}>Start Now</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );

  const renderTeacherView = () => (
    <>
      <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Exams and Tests
          </h1>
          <p className="text-muted-foreground">
            Manage the exams you created and view student performance.
          </p>
        </div>
        <Link href="/prova/criar">
          <Button className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            New Exam
          </Button>
        </Link>
      </div>

      <div className="flex flex-col gap-4 md:flex-row">
        <div className="flex-1">
          <Input
            placeholder="Search exams..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full"
            prefix={<Search className="mr-2 h-4 w-4 text-muted-foreground" />}
          />
        </div>
        <Select value={subjectFilter} onValueChange={setSubjectFilter}>
          <SelectTrigger className="w-full md:w-[180px]">
            <Filter className="mr-2 h-4 w-4" />
            <SelectValue placeholder="Subject" />
          </SelectTrigger>
          <SelectContent>
            {subjects.map((subject) => (
              <SelectItem key={subject} value={subject}>
                {subject}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All statuses</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="completed">Closed</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {filteredTeacherExams.length > 0 ? (
        <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-2">
          {filteredTeacherExams.map((exam) => (
            <Card key={exam.id}>
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <Badge
                        variant="outline"
                        className="bg-primary/10 text-primary"
                      >
                        {exam.subject}
                      </Badge>
                      {exam.completed ? (
                        <Badge
                          variant="outline"
                          className="border-blue-500 text-blue-500"
                        >
                          Closed
                        </Badge>
                      ) : (
                        <Badge
                          variant="outline"
                          className={getDifficultyColor(exam.difficulty)}
                        >
                          {exam.difficulty}
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="mt-2">{exam.title}</CardTitle>
                    <CardDescription>
                      <div className="flex items-center gap-1 mt-1">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span>Created on: {formatDate(exam.createdDate)}</span>
                      </div>
                      <div className="flex items-center gap-1 mt-1">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>Due date: {formatDate(exam.dueDate)}</span>
                      </div>
                    </CardDescription>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="-mt-1 -mr-2"
                      >
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem asChild>
                        <Link
                          href={`/prova/${exam.id}/resultado`}
                          className="flex w-full cursor-pointer items-center"
                        >
                          <Users className="mr-2 h-4 w-4" />
                          View Results
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link
                          href={`/prova/${exam.id}/editar`}
                          className="flex w-full cursor-pointer items-center"
                        >
                          <Edit className="mr-2 h-4 w-4" />
                          Edit
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="flex cursor-pointer items-center">
                        <Copy className="mr-2 h-4 w-4" />
                        Duplicate
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem
                        className="flex cursor-pointer items-center text-destructive focus:text-destructive"
                        onClick={() => handleDeleteExam(exam)}
                      >
                        <Trash2 className="mr-2 h-4 w-4" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardHeader>
              <CardContent>
                <div className="">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="flex flex-col items-center justify-center rounded-md border p-3">
                      <Clock className="mb-1 h-5 w-5 text-muted-foreground" />
                      <span className="text-sm font-medium">
                        {formatDuration(exam.duration)}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        Duração
                      </span>
                    </div>
                    <div className="flex flex-col items-center justify-center rounded-md border p-3">
                      <FileText className="mb-1 h-5 w-5 text-muted-foreground" />
                      <span className="text-sm font-medium">
                        {exam.questionsCount}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        Questions
                      </span>
                    </div>
                    <div className="flex flex-col items-center justify-center rounded-md border p-3">
                      <Award className="mb-1 h-5 w-5 text-muted-foreground" />
                      <span
                        className={`text-sm font-medium ${getScoreColor(
                          exam.averageScore
                        )}`}
                      >
                        {exam.averageScore}%
                      </span>
                      <span className="text-xs text-muted-foreground">
                        Average
                      </span>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium mb-2">Classes</h4>
                    <div className="space-y-2">
                      {exam.classes.map((cls) => (
                        <div
                          key={cls.id}
                          className="flex items-center justify-between rounded-md border p-3"
                        >
                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4 text-muted-foreground" />
                            <span>{cls.name}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">
                              {cls.completedCount}/{cls.studentsCount} students
                            </span>
                            <Progress
                              value={
                                (cls.completedCount / cls.studentsCount) * 100
                              }
                              className="h-2 w-20"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-2">
                <Button variant="outline" asChild>
                  <Link href={`/prova/${exam.id}/editar`}>Edit</Link>
                </Button>
                <Button asChild>
                  <Link href={`/prova/${exam.id}/resultado`}>
                    View Results
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <div className="flex h-[200px] w-full flex-col items-center justify-center rounded-md border border-dashed">
          <FileText className="h-10 w-10 text-muted-foreground mb-2" />
          <p className="text-sm text-muted-foreground">
            No exams found. Create a new exam to get started.
          </p>
          <Link href="/prova/criar" className="mt-4">
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              New Exam
            </Button>
          </Link>
        </div>
      )}

      <Dialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <DialogContent className="!bg-white">
          <DialogHeader>
            <DialogTitle>Delete Exam</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this exam? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>

          {selectedExamToDelete && (
            <div className="py-4">
              <p className="font-medium">{selectedExamToDelete.title}</p>
              <p className="text-sm text-muted-foreground">
                {selectedExamToDelete.subject}
              </p>
            </div>
          )}

          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setShowDeleteDialog(false)}
            >
              Cancel
            </Button>
            <Button variant="destructive" onClick={confirmDeleteExam}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );

  return (
    <div className="app-main">
      {userRole === "professor" ? renderTeacherView() : renderStudentView()}
    </div>
  );
}
